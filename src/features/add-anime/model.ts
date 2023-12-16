import axios from "axios";
import { IAddAnime } from "./types";

class AddAnimeService {
  public async addPopular(dto: IAddAnime) {
    try {
      await axios.post("/api/admin/add-to-popular", dto);
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
  public async addTop(dto: IAddAnime) {
    try {
      await axios.post("/api/admin/add-to-top", dto);
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
}

export default new AddAnimeService();
