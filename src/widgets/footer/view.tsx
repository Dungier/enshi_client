import { Logo } from "@/shared/components/logo";
import { Container, Grid, Typography } from "@mui/material";
import { ContactButton } from "../../shared/components/contact-button";
import { SocialLinks } from "../../shared/components/social-links";

export const Footer = () => {
  return (
    <footer style={{ background: "#1F1F25" }}>
      <Container>
        <Grid container>
          <Grid>
            <Logo />
            <Typography>© 2023 ENSHI. Все права защищены.</Typography>
          </Grid>
          <Grid>
            <SocialLinks />
          </Grid>
          <Grid>
            <ContactButton />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};
