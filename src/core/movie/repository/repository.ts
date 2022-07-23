import _ from "lodash";
import { IMovie, PMovieFilter } from "../entities";
import IMovieRepository from "../repository";
import Instance from "../../../config";

export default class MovieRepository implements IMovieRepository {
  getParams(filter: PMovieFilter, page?: number) {
    const params = _.pickBy(
      {
        i: filter.id,
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

      return {
        ...data,
        nextPage: page + 1,
        totalPage: Math.ceil(Number(data.totalResults) / 10),
      };
    } catch (error) {
      throw error;
    }
  }

  async getMovie(id: string): Promise<IMovie> {
    try {
      const response = await Instance().get(`/`, {
        params: {
          ...this.getParams({ id }),
        },
      });
      const { data } = response;
      return data;
    } catch (error) {
      throw error;
    }
  }
}
