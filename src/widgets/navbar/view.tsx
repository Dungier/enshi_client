import { SearchAnime } from "@/features/search-anime";
import { Logo } from "@/shared/components/logo";
import { ProfileButton } from "@/shared/components/profile-button";
import { SocialLinks } from "@/shared/components/social-links";
import { Menu } from "./lib/menu";
import { StyledContainer, StyledHeader } from "./styles";

export const NavBar = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <Menu />

        <Logo />

        <SearchAnime />

        <SocialLinks />

        <ProfileButton />
      </StyledContainer>
    </StyledHeader>
  );
};
