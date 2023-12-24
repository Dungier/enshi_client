import { FC, useCallback } from "react";
import { FilterPopoverProps } from "./types";
import { Button, List, ListItem, Popover } from "@mui/material";
import { FilterType } from "../../types";

export const FilterPopover: FC<FilterPopoverProps> = ({
  open,
  onClose,
  anchorEl,
  filters,
  type,
  setFilters,
}) => {
  const handleSetFilters = useCallback(
    (filter: FilterType) => {
      if (type === "genre") {
        const isSelected = filters?.genre?.find((item) => item.selected);
        if (isSelected) {
          setFilters({
            genre: [
              ...(filters.genre || []),
              { id: filter.id, title: filter.title, selected: true },
            ],
          });
        } else {
          setFilters({
            genre,
          });
        }
      }
    },
    [filters]
  );
  return (
    <Popover open={open} onClose={onClose} anchorEl={anchorEl}>
      <List>
        {filters[type]?.map((filter) => (
          <ListItem key={filter.id}>
            <Button></Button>
          </ListItem>
        ))}
      </List>
    </Popover>
  );
};
