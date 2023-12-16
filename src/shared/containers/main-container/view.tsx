import { Container } from "@mui/material";
import { FC, ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
