import { SearchAnime } from "@/features/search-anime";
import { ThemeToggler } from "@/features/theme-toggler";
import { Logo } from "@/shared/components/logo";
import { ProfileButton } from "@/shared/components/profile-button";
import { SocialLinks } from "@/shared/components/social-links";
import { Grid } from "@mui/material";
import { Menu } from "./lib/menu";
import { StyledContainer, StyledHeader } from "./styles";

export const NavBar = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Menu />

        <Logo />

        <SearchAnime />

        <ThemeToggler />

        <SocialLinks />

        <ProfileButton />
      </StyledContainer>
    </StyledHeader>
  );
};
