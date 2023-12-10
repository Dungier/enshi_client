export interface IUser {
  id: number;
  email: string;
  login: string;
  avatar_url: string | null;
  minutes_watched: number | null;
  createdAt: Date;
  admin: boolean;
}
