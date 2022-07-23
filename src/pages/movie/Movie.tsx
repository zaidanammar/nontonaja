import React from "react";
import InfiniteScroll from "react-infinite-scroller";

import OCardContainer from "../../components/organisms/OCardContainer";
import MMovieCard from "../../components/molecules/MMovieCard";
import { MovieCardSkeleton } from "../../components/molecules/MSkeleton";
import { useFetchMovies } from "../../hooks/movie";
import { IMovie } from "../../core/movie/entities";

const Movie = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useFetchMovies({
    s: "spider",
  });

  return (
    <main className="text-white">
      {isLoading ? (
        <OCardContainer>
          {new Array(12).fill(1).map((_, index) => (
            <MovieCardSkeleton key={index} />
          ))}
        </OCardContainer>
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
