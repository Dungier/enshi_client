import { SearchAnime } from "@/features/search-anime";
import { ThemeToggler } from "@/features/theme-toggler";
import { Logo } from "@/shared/components/logo";
import { ProfileButton } from "@/shared/components/profile-button";
import { SocialLinks } from "@/shared/components/social-links";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Menu } from "./lib/menu";

export const NavBar = () => {
  return (
    <header>
      <Container>
        <Grid container>
          <Grid item>
            <Menu />
          </Grid>
          <Grid item>
            <Logo />
          </Grid>
          <Grid item>
            <SearchAnime />
          </Grid>
          <Grid item>
            <ThemeToggler />
          </Grid>
          <Grid item>
            <SocialLinks />
          </Grid>
          <Grid item>
            <ProfileButton />
          </Grid>
        </Grid>
      </Container>
    </header>
  );
};
