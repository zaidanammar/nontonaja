export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

interface IMovieFilter {
  search: string;
}
export type PMovieFilter = Partial<IMovieFilter>;
