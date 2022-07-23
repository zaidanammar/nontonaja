import { MovieService } from "../../apis/movie";
import { useInfiniteQuery } from "@tanstack/react-query";

type useFetchMoviesProps = {
  search: string;
  enabled: boolean;
  dependency: string | null;
};

const useFetchMovies = ({
  enabled,
  dependency,
  search,
}: useFetchMoviesProps) => {
  return useInfiniteQuery(
    ["movies", dependency],
    ({ pageParam = 1 }) => MovieService.getMovies({ search, page: pageParam }),
    {
      getNextPageParam: (pages: any) => {
        if (pages?.nextPage <= pages?.totalPage) {
          return pages?.nextPage;
        }
        return undefined;
      },
      enabled,
      refetchOnWindowFocus: false,
    }
  );
};

export { useFetchMovies };
