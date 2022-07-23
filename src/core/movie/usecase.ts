import { IMovie, PMovieFilter } from "./entities";

export default interface IMovieUsecase {
  getMovies(
    filter: PMovieFilter,
    page: number
  ): Promise<{
    Response: string;
    Search: IMovie[];
    totalResults: string;
    nextPage: number;
    totalPage: number;
  }>;

  getMovie(id: string): Promise<IMovie>;
}
