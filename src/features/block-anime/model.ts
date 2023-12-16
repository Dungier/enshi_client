import { IAnime } from "@/shared/types/anime.types";
import axios from "axios";

class BlockAnimeService {
  public async blockAnime(id: number) {
    try {
      const { data } = await axios.post<IAnime>("/api/admin/block-anime", {
        id,
      });
      return data;
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
}

export default new BlockAnimeService();
