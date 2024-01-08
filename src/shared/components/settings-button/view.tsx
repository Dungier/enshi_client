"use client";

import { Button } from "@mui/material";
import Image from "next/image";
import Ic_Settings from "@/assets/icons/ic_settings.svg";
import Link from "next/link";

export const Settings = () => {
  return (
    <Link href={"/profile/settings"}>
      <Button>
        <span>
          <Image src={Ic_Settings} alt={"настройки"} />
        </span>
      </Button>
    </Link>
  );
};
