import { IMovie } from "./entities";

export default interface IMovieUsecase {
  getMovies(filter: { s: string; page: number }): Promise<{
    Response: string;
    Search: IMovie[];
    totalResults: string;
    nextPage: number;
    totalPage: number;
  }>;
}