import { IAnime } from "@/shared/types/anime.types";
import axios from "axios";

class BlockAnimeService {
  public async getBlocked() {
    try {
      const { data } = await axios.get<IAnime[]>("/api/admin/get-blocked");
      return data;
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
}

export default new BlockAnimeService();
