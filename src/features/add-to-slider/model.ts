import axios from "axios";
import { ICreateSlide } from "./types";

class AddSliderService {
  public async addSlide(dto: ICreateSlide) {
    try {
      await axios.post("/api/admin/add-to-slider", dto);
    } catch (e) {
      console.error(e);
      throw new Error(`${e}`);
    }
  }
}

export default new AddSliderService();
