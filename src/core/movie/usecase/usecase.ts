import { IMovie, PMovieFilter } from "../entities";
import IMovieRepository from "../repository";
import IMovieUsecase from "../usecase";

export default class MovieUsecase implements IMovieUsecase {
  private movieRepo: IMovieRepository;

  constructor(movieRepo: IMovieRepository) {
    this.movieRepo = movieRepo;
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
    return await this.movieRepo.getMovies(filter, page);
  }

  async getMovie(id: string): Promise<IMovie> {
    return await this.movieRepo.getMovie(id);
  }
}
