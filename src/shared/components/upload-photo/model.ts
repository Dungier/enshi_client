import $api from "@/configs/axios.config";
import { IUploadPhotoResponse } from "./types";

class PhotoService {
  async upload(file: File, folder?: string) {
    const formData = new FormData();
    formData.append("file", file);

    const { data } = await $api.post<IUploadPhotoResponse[]>(
      `/file`,
      formData,
      {
        params: { folder },
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  }
}

export default new PhotoService();
