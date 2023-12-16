import axios from "axios";
import { IDeleteSlide } from "./types";

class DeleteAnimeService {
  public async deleteSlide(dto: IDeleteSlide) {
    try {
      await axios.post("/api/admin/delete-slide", dto);
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
  public async deleteTop(dto: IDeleteSlide) {
    try {
      await axios.post("/api/admin/delete-top", { anime_id: dto.slider_id });
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
  public async deletePopular(dto: IDeleteSlide) {
    try {
      await axios.post("/api/admin/delete-popular", {
        anime_id: dto.slider_id,
      });
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
}

export default new DeleteAnimeService();
