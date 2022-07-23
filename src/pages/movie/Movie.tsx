import React from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

import OCardContainer from "../../components/organisms/OCardContainer";
import MMovieCard from "../../components/molecules/MMovieCard";
import { MovieCardSkeleton } from "../../components/molecules/MSkeleton";
import { useFetchMovies } from "../../hooks/movie";
import { IMovie } from "../../core/movie/entities";
import { useQueries } from "../../utils/useQueries";

const Movie = () => {
  const query = useQueries(useLocation);
  const { data, isLoading, fetchNextPage, hasNextPage } = useFetchMovies({
    dependency: query.get("s"),
    search: query.get("s") || "spider",
    enabled: true,
  });

  return (
    <main className="text-white">
      {isLoading ? (
        <OCardContainer>
          {new Array(6).fill(1).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </OCardContainer>
      ) : !data?.pages[0] ? (
        <section className="flex justify-center pt-10">
          <p className="text-white">No results</p>
        </section>
      ) : (
        <InfiniteScroll
          loadMore={() => fetchNextPage()}
          hasMore={hasNextPage}
          loader={
            <OCardContainer>
              {new Array(6).fill(1).map((_, index) => (
                <MovieCardSkeleton key={index} />
              ))}
            </OCardContainer>
          }
        >
          <OCardContainer>
            {data &&
              data?.pages?.map((page) =>
                page?.Search?.map((movie: IMovie) => (
                  <MMovieCard key={movie.imdbID} movie={movie} />
                ))
              )}
          </OCardContainer>
        </InfiniteScroll>
      )}
    </main>
  );
};

export default Movie;
