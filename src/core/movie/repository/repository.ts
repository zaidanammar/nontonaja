import _ from "lodash";
import { IMovie, PMovieFilter } from "../entities";
import IMovieRepository from "../repository";
import Instance from "../../../config";

export default class MovieRepository implements IMovieRepository {
  getParams(filter: PMovieFilter, page: number) {
    const params = _.pickBy(
      {
        s: filter.search,
        page,
      },
      (val) => val
    );
    return params;
  }

  async getMovies(
    filter: PMovieFilter,
    page: number
  ): Promise<{
    Response: string;
    Search: IMovie[];
    totalResults: string;
    nextPage: number;
    totalPage: number;
  }> {
    try {
      const response = await Instance().get(`/`, {
        params: {
          ...this.getParams(filter, page),
        },
      });
      const { data } = response;

      if (data.Response === "False") {
        throw data.Error;
      }
      return {
        ...data,
        nextPage: page + 1,
        totalPage: Math.ceil(Number(data.totalResults) / 10),
      };
    } catch (error) {
      throw error;
    }
  }
}
