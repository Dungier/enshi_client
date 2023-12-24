"use client";
import { FC } from "react";
import { FilterButtonProps } from "./types";
import { Button } from "@mui/material";

export const FilterButton: FC<FilterButtonProps> = ({
  setFilters,
  type,
  label,
  filters,
}) => {
  return <Button>{label}</Button>;
};
