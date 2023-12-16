export interface IAnime {
  anime_id: number;
  id?: string | null;
  type?: string | null;
  link: string;
  title: string;
  title_orig?: string | null;
  other_title?: string | null;
  translation?: any;
  year?: number | null;
  last_season?: number | null;
  last_episode?: number | null;
  episodes_count?: number | null;
  kinopoisk_id?: string | null;
  imdb_id?: string | null;
  worldart_link?: string | null;
  shikimori_id?: string | null;
  quality?: string | null;
  camrip?: boolean | null;
  lgbt?: boolean | null;
  blocked_countries: string[];
  blocked_seasons?: any;
  material_data?: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISeason {
  id: number;
  animeId?: number | null;
  link?: string | null;
  createdAt: Date;
  updatedAt: Date;
  episodes: IEpisode[];
  anime?: IAnime | null;
}

export interface IEpisode {
  id: number;
  seasonId?: number | null;
  link?: string | null;
  createdAt: Date;
  updatedAt: Date;
  season?: ISeason | null;
}
