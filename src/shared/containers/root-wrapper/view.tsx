import { ReactNode } from "react";
import { ContainerStyles } from "./styles";

export const Wrapper = ({ children }: { children: ReactNode }) => {
  return <ContainerStyles>{children}</ContainerStyles>;
};
