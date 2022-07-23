import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import OCardContainer from "../../components/organisms/OCardContainer";
import MMovieCard from "../../components/molecules/MMovieCard";
import { MovieCardSkeleton } from "../../components/molecules/MSkeleton";

const Movie = () => {
  return (
    <main className="text-white">
      <OCardContainer>
        {/* {new Array(12).fill(1).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))} */}
      </OCardContainer>

      {/* <InfiniteScroll
        dataLength={Infinity}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <OCardContainer>
            {new Array(12).fill(1).map((_, index) => (
              <MovieCardSkeleton key={index} />
            ))}
          </OCardContainer>
        }
        endMessage={<></>}
      > */}
      <OCardContainer>
        {/* {dataProducts &&
          dataProducts?.pages?.map((page) =>
            page?.results?.products?.map((item) => (
              <div
                key={`${item.id}`}
                style={{ maxWidth: "185px" }}
                className="mr-10 w-full"
              >
                <MItemCard data={item} />
              </div>
            ))
          )} */}

        {new Array(24).fill(1).map((_, index) => (
          <MMovieCard key={index} />
        ))}
      </OCardContainer>
      {/* </InfiniteScroll> */}
    </main>
  );
};

export default Movie;
