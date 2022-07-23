import { MovieService } from "../../apis/movie";
import { useInfiniteQuery } from "@tanstack/react-query";

const useFetchMovies = (filter: { s: string }) => {
  return useInfiniteQuery(
    ["movies"],
    ({ pageParam = 1 }) =>
      MovieService.getMovies({ s: filter.s, page: pageParam }),
    {
      // getNextPageParam: (pages: {
      //   nextPage: number;
      //   results: { page_info: { last_page: number } };
      // }) => {
      //   if (pages.nextPage <= pages?.results?.page_info?.last_page)
      //     return pages.nextPage;
      //   return undefined;
      // },
      getNextPageParam: (pages: any) => {
        console.log(pages);
        if (pages.nextPage <= pages?.totalPage) {
          return pages.nextPage;
        }
        return undefined;
      },
    }
  );
};

export { useFetchMovies };
