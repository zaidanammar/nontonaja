import _ from "lodash";
import { IMovie } from "../entities";
import IMovieRepository from "../repository";
import Instance from "../../../config";

export default class MovieRepository implements IMovieRepository {
  getParams(filter: any) {
    const params = _.pickBy(
      {
        ...filter,
      },
      (val) => val
    );
    return params;
  }

  async getMovies(filter: { s: string; page: number }): Promise<{
    Response: string;
    Search: IMovie[];
    totalResults: string;
    nextPage: number;
    totalPage: number;
  }> {
    try {
      const response = await Instance().get(`/`, {
        params: {
          ...this.getParams(filter),
        },
      });
      const { data } = response;
      return {
        ...data,
        nextPage: filter.page + 1,
        totalPage: Math.ceil(Number(data.totalResults) / 10),
      };
    } catch (error) {
      throw error;
    }
  }
}
