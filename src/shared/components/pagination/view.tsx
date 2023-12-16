"use client";
import { Pagination } from "@mui/material";
import { FC } from "react";
import { IPagination } from "./types";

export const PaginationComponent: FC<IPagination> = ({ count, setPage }) => {
  return (
    <Pagination
      count={count}
      shape="rounded"
      onChange={(e, page) => setPage(page)}
    />
  );
};
