export interface IUser {
  id: number;
  email: string;
  login: string;
  avatar_url: string;
  minutes_watched: number;
  createdAt: Date;
  admin: boolean;
  wallpaper_url: string;
}
