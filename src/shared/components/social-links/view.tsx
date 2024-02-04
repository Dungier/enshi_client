"use client";
import Image from "next/image";
import Ic_Yt from "@/assets/icons/ic_yt.svg";
import Ic_Tg from "@/assets/icons/ic_tg.svg";
import Ic_Vk from "@/assets/icons/ic_vk.svg";
import Link from "next/link";
import { StyledContactButton, StyledContainer } from "./styles";
import { useMediaQuery } from "@mui/material";

export const SocialLinks = () => {
  const isMobile = useMediaQuery("(max-width: 1600px)");
  return isMobile ? (
    <></>
  ) : (
    <StyledContainer>
      <Link href={""}>
        <StyledContactButton>
          <Image src={Ic_Vk} alt="Вконтакте" width={32} height={26} />
        </StyledContactButton>
      </Link>
      <Link href={""}>
        <StyledContactButton>
          <Image src={Ic_Tg} alt="Telegram" width={28} height={28} />
        </StyledContactButton>
      </Link>
      <Link href={""}>
        <StyledContactButton>
          <Image src={Ic_Yt} alt="Youtube" width={34} height={34} />
        </StyledContactButton>
      </Link>
    </StyledContainer>
  );
};
