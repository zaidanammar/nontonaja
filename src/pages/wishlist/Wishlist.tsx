import React from "react";
import { isEmpty } from "lodash";

import { IMovie } from "../../core/movie/entities";
import { useAppSelector } from "../../store/hooks";
import { selectWishlist } from "../../store/wishlists/wishlistsSlice";
import OCardContainer from "../../components/organisms/OCardContainer";
import MMovieCard from "../../components/molecules/MMovieCard";

const Wishlist = () => {
  const wishlists = useAppSelector(selectWishlist);

  return (
    <main className="text-white">
      {isEmpty(wishlists) ? (
        <section className="flex justify-center pt-10">
          <p className="text-white font-bold">Your wishlist is still empty :(</p>
        </section>
      ) : (
        <OCardContainer>
          {wishlists.map((movie: IMovie) => (
            <MMovieCard key={movie.imdbID} movie={movie} wishlist />
          ))}
        </OCardContainer>
      )}
    </main>
  );
};

export default Wishlist;
