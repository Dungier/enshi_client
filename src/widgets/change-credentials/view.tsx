"use server";

import { ChangeAccountInfo } from "@/features/change-account-info";
import { ChangePassword } from "@/features/change-password";
import { ChangePhotos } from "@/features/change-photos";
import { StyledTopContainer } from "./styles";

export const ChangeCredentials = () => {
  return (
    <div>
      <StyledTopContainer>
        <ChangeAccountInfo />
        <ChangePassword />
      </StyledTopContainer>

      <ChangePhotos />
    </div>
  );
};
