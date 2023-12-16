import Image from "next/image";
import Ic_Yt from "@/assets/icons/ic_yt.svg";
import Ic_Tg from "@/assets/icons/ic_tg.svg";
import Ic_Vk from "@/assets/icons/ic_vk.svg";
import { Box, Button } from "@mui/material";
import Link from "next/link";

export const SocialLinks = () => {
  return (
    <Box>
      <Link href={""}>
        <Button>
          <Image src={Ic_Vk} alt="Вконтакте" />
        </Button>
      </Link>
      <Link href={""}>
        <Button>
          <Image src={Ic_Tg} alt="Telegram" />
        </Button>
      </Link>
      <Link href={""}>
        <Button>
          <Image src={Ic_Yt} alt="Youtube" />
        </Button>
      </Link>
    </Box>
  );
};
