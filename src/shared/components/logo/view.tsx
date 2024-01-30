"use server";
import Link from "next/link";
import { StyledSpan, StyledLogo } from "./styles";

export const Logo = () => {
  return (
    <Link href="/" style={{ textDecoration: "none" }}>
      <StyledLogo>
        ENSHI<StyledSpan>.</StyledSpan>
      </StyledLogo>{" "}
    </Link>
  );
};
