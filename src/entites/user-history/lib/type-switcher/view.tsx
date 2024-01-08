"use client";
import { useUserHistoryMode } from "@/shared/context/history-mode";
import { Box, Button } from "@mui/material";

export const TypeSwitcher = () => {
  const { toggleMode } = useUserHistoryMode();
  return (
    <Box>
      <Button onClick={() => toggleMode("viewed")}>Просмотрено</Button>
      <Button onClick={() => toggleMode("favourite")}>Избранное</Button>
    </Box>
  );
};
