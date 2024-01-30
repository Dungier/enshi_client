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
  material_data: IMaterialData;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
}

export interface IMaterialData {
  id: number;
  anime_id: number;
  title: string;
  anime_title: string;
  title_en: string;
  other_titles: string[];
  other_titles_en: string[];
  other_titles_jp: string[];
  anime_kind: string;
  all_status: string;
  anime_status: string;
  year: number;
  description: string;
  poster_url: string;
  screenshots: string[];
  duration: number;
  countries: string[];
  all_genres: string[];
  genres: string[];
  anime_genres: string[];
  anime_studios: string[];
  kinopoisk_rating: number;
  kinopoisk_votes: number;
  imdb_rating: number;
  imdb_votes: number;
  shikimori_rating: number;
  shikimori_votes: number;
  premiere_world: string;
  aired_at: Date;
  next_episode_at: Date;
  rating_mpaa: string;
  episodes_total: number;
  episodes_aired: number;
  actors: string[];
  directors: string[];
  producers: string[];
  writers: string[];
  composers: string[];
  editors: string[];
  designers: string[];
  operators: string[];
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
