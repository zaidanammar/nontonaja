import MovieRepository from "../../core/movie/repository/repository";
import MovieUsecase from "../../core/movie/usecase/usecase";

type GetMoviesProps = {
  search: string;
  page: number;
};

export class MovieService {
  static getMovies = async ({ search, page }: GetMoviesProps) => {
    try {
      const movieRepo = new MovieRepository();
      const movieUsecase = new MovieUsecase(movieRepo);
      const movies = await movieUsecase.getMovies({ search }, page);
      return movies;
    } catch (error) {
      console.log(error);
    }
  };

  static getMovie = async (id: string) => {
    try {
      const movieRepo = new MovieRepository();
      const movieUsecase = new MovieUsecase(movieRepo);
      const movie = await movieUsecase.getMovie(id);
      return movie;
    } catch (error) {
      console.log(error);
    }
  };
}
