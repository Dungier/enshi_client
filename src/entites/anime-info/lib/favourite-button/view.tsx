import { Button } from "@mui/material";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { checkFavourite } from "./model";

export const FavouriteButton = async () => {
  const session = await getServerSession();
  const user = session?.user;
  if (user) {
    const isFavourite = await checkFavourite(user);
  } else {
    return (
      <Button>
        <Link href={"/login"}>Войти</Link>
      </Button>
    );
  }
};
