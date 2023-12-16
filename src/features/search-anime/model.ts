import axios from "axios";
import { ISearchAnime, ISearchAnimeResponse } from "./types";

class SearchAnimeService {
  public async searchByName(dto: ISearchAnime): Promise<ISearchAnimeResponse> {
    const { data } = await axios.get<ISearchAnimeResponse>(
      "/api/anime/search",
      {
        params: {
          query: dto.name,
          page: dto.page,
          limit: dto.limit,
        },
      }
    );
    return data;
  }
}

export default new SearchAnimeService();
