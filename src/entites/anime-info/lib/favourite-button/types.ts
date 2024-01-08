export interface FavouriteButtonProps {
  anime_id: number;
}

export interface IAnimeCheck {
  user_id: number;
  anime_id: number;
}

export interface IAddToFavourite {
  user_id: number;
  anime_id: number;
}

export interface IRemoveFromFavourite {
  user_id: number;
  anime_id: number;
}
