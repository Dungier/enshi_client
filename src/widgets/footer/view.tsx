import { Logo } from "@/shared/components/logo";
import { Box, Grid } from "@mui/material";
import { ContactButton } from "../../shared/components/contact-button";
import { SocialLinks } from "../../shared/components/social-links";
import { StyledCopyRight, StyledFooter, StyledContainer } from "./styles";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <Box>
          <Logo />
          <StyledCopyRight>
            © 2024 ENSHI.
            <br /> Все права защищены.
          </StyledCopyRight>
        </Box>

        <SocialLinks />

        <ContactButton />
      </StyledContainer>
    </StyledFooter>
  );
};
