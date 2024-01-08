"use client";
import { Box, FormGroup, Input, InputLabel, Typography } from "@mui/material";
import Ic_Search from "@/assets/icons/ic_search.svg";
import Image from "next/image";
import { ChangeEvent, FC, useRef, useState } from "react";
import { SearchList } from "./lib/search-list/view";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IAnime } from "@/shared/types/anime.types";
import { searchByName } from "./model";

export const SearchAnime: FC<{ setAnime?: (arg: IAnime) => void }> = ({
  setAnime,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const anchorElRef = useRef<HTMLElement | null>(null);

  const fetchAnimes = async ({ pageParam = 1, limitParam = 10 }) => {
    const result = await searchByName({
      page: pageParam,
      limit: limitParam,
      name: searchTerm,
    });
    return result;
  };

  const {
    data: pagedAnimes,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["search-anime", searchTerm],
    queryFn: fetchAnimes,
    enabled: !!debouncedSearch,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage && lastPage.page < lastPage.totalPages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setOpen(searchTerm.length > 1);
  };

  const fetchMore = () => {
    if (hasNextPage) fetchNextPage();
  };

  return (
    <Box>
      <FormGroup
        ref={anchorElRef}
        onClick={() => searchTerm.length !== 0 && setOpen(true)}
      >
        <InputLabel>
          <Typography variant="subtitle2">Поиск аниме</Typography>
        </InputLabel>
        <Input onChange={handleSearch} value={searchTerm} />
        <Image src={Ic_Search} alt="Поиск" />
      </FormGroup>
      <SearchList
        setOpen={setOpen}
        setAnime={setAnime}
        onClose={() => setOpen(false)}
        open={open}
        anchorEl={anchorElRef.current}
        pagedAnimes={pagedAnimes}
        isLoading={isLoading}
        fetchMore={fetchMore}
      />
    </Box>
  );
};
