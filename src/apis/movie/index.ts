import MovieRepository from "../../core/movie/repository/repository";
import MovieUsecase from "../../core/movie/usecase/usecase";

export class MovieService {
  static getMovies = async (filter: { s: string; page: number }) => {
    try {
      const movieRepo = new MovieRepository();
      const movieUsecase = new MovieUsecase(movieRepo);
      const movies = await movieUsecase.getMovies({
        s: filter.s,
        page: filter.page,
      });
      return movies;
    } catch (error) {
      console.log(error);
    }
  };
}
