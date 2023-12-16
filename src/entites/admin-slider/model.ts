import { IAnimeSlider } from "@/shared/types/slider.types";
import axios from "axios";
import { IChangeOrder } from "./types";

class AdminSliderService {
  public async getHomeSliders() {
    try {
      const { data } = await axios.get<IAnimeSlider[]>(
        "/api/anime/get-sliders"
      );
      return data;
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
  public async getTop() {
    try {
      const { data } = await axios.get<IAnimeSlider[]>("/api/anime/get-top");
      return data;
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
  public async getPopular() {
    try {
      const { data } = await axios.get<IAnimeSlider[]>(
        "/api/anime/get-popular"
      );
      return data;
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
  public async changeOrder(dto: IChangeOrder) {
    try {
      const { data } = await axios.post("/api/admin/change-order", dto);
      return data;
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
}

export default new AdminSliderService();
