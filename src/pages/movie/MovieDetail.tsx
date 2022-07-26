import React from "react";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Divider } from "@mui/material";

import { useFetchMovie } from "../../hooks/movie";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addToWishlist,
  selectWishlist,
} from "../../store/wishlists/wishlistsSlice";
import ALoading from "../../components/atoms/ALoading";
import AButton from "../../components/atoms/AButton";
import { IMovie } from "../../core/movie/entities";
import { useSnackbar } from "notistack";

const MovieDetail = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const wishlists = useAppSelector(selectWishlist);
  const { data, isLoading } = useFetchMovie(params?.id || "");

  const handleAddToWishlist = (movie: IMovie) => {
    if (wishlists.includes(movie)) {
      enqueueSnackbar("This movie is already exists on your wishlist!", {
        variant: "error",
        autoHideDuration: 1500,
      });
    } else {
      dispatch(addToWishlist(movie));
      enqueueSnackbar("Movie added to wishlist!", {
        variant: "success",
        autoHideDuration: 1500,
      });
    }
  };

  return (
    <main className="text-white xs:mt-5 mt-4 xs:mb-5 mb-28">
      {isLoading && (
        <div className="flex justify-center my-10">
          <ALoading />
        </div>
      )}
      {data && (
        <div className="flex gap-5 flex-wrap">
          <div className="sm:w-2/5 w-full">
            <img
              src={data?.Poster}
              alt="-"
              className="object-cover rounded-md shadow-md w-full"
            />
          </div>
          <div className="sm:flex-1 w-full">
            <section id="detail-title">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">{data?.Title}</h1>
                <p className="text-sm text-primary font-bold">
                  {data.BoxOffice}
                </p>
              </div>
              <div className="flex items-center gap-1 mt-1.5">
                <MdStarRate color="#FEDD25" size={20} />
                <p className="text-sm">
                  {data.imdbRating} | {data?.imdbVotes} votes
                </p>
              </div>
              <Divider color="white" sx={{ margin: "10px 0" }} />
            </section>

            <section id="detail-info" className="mt-1">
              <h1 className="font-bold">Detail Info</h1>
              <div className="flex my-2.5 gap-6">
                <div className="flex flex-col text-sm w-full">
                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Actors</p>
                    <p className="flex-1">{data.Actors}</p>
                  </div>

                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Writers</p>
                    <p className="flex-1">{data.Writer}</p>
                  </div>

                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Director</p>
                    <p className="flex-1">{data.Director}</p>
                  </div>

                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Genre</p>
                    <p className="flex-1"> {data.Genre}</p>
                  </div>

                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Production</p>
                    <p className="flex-1">{data.Production}</p>
                  </div>

                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Released</p>
                    <p className="flex-1">{data.Released}</p>
                  </div>

                  <div className="flex items-start w-full my-0.5">
                    <p className="xs:w-1/6 w-1/4">Country</p>
                    <p className="flex-1">{data.Country}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div>
                <p className="text-primary text-sm font-bold">Awards</p>
                <p className="text-xs mt-1">{data.Awards}</p>
              </div>

              <div className="mt-4">
                <p className="text-primary text-sm font-bold">Plot</p>
                <p className="text-xs mt-1">{data.Plot}</p>
              </div>
            </section>

            <div className="fixed inset-x-0 bottom-0 bg-slate-200 sm:bg-transparent sm:p-0 p-4 sm:static sm:mt-5 mt-0 z-20">
              <AButton
                handleClick={() => handleAddToWishlist(data)}
                variant="contained"
              >
                <div className="flex items-center gap-3">
                  <span className="mt-1">+ Wishlist</span>
                  <BsCart2 size={20} />
                </div>
              </AButton>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default MovieDetail;
