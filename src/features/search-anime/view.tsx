"use client";
import { FormGroup } from "@mui/material";
import Ic_Search from "@/assets/icons/ic_search.svg";
import { ChangeEvent, FC, useRef, useState } from "react";
import { SearchList } from "./lib/search-list/view";
import { useDebounce } from "@/shared/hooks/use-debounce";
import { useInfiniteQuery } from "@tanstack/react-query";
import { IAnime } from "@/shared/types/anime.types";
import { searchByName } from "./model";
import { Input } from "@/shared/components/input";
import { StyledImage, StyledSearchContainer } from "./styles";

export const SearchAnime: FC<{ setAnime?: (arg: IAnime) => void }> = ({
  setAnime,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 250);
  const anchorElRef = useRef<HTMLElement | null>(null);

  const fetchAnime = async ({ pageParam = 1, limitParam = 10 }) => {
    return await searchByName({
      page: pageParam,
      limit: limitParam,
      name: searchTerm,
    });
  };

  const {
    data: pagedAnime,
    fetchNextPage,
    hasNextPage,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ["search-anime", searchTerm],
    queryFn: fetchAnime,
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
    hasNextPage ? fetchNextPage() : null;
  };
  return (
    <StyledSearchContainer>
      <FormGroup
        ref={anchorElRef}
        onClick={() => searchTerm.length !== 0 && setOpen(true)}
      >
        <Input
          onChange={handleSearch}
          value={searchTerm}
          placeholder="Поиск аниме"
        />
        <StyledImage src={Ic_Search} alt="Поиск" width={30} height={30} />
      </FormGroup>
      <SearchList
        setOpen={setOpen}
        setAnime={setAnime}
        onClose={() => setOpen(false)}
        open={open}
        anchorEl={anchorElRef.current}
        pagedAnimes={pagedAnime}
        isLoading={isLoading}
        fetchMore={fetchMore}
      />
    </StyledSearchContainer>
  );
};
