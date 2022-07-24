import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineTrash } from "react-icons/hi";

import { IMovie } from "../../core/movie/entities";
import { useAppDispatch } from "../../store/hooks";
import { removeFromWishlist } from "../../store/wishlists/wishlistsSlice";
import OPopupImage from "../organisms/OPopupImage";
import { useSnackbar } from "notistack";

type Props = {
  movie: IMovie;
  wishlist?: boolean;
};

const MMovieCard = ({ movie, wishlist }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [openPopup, setOpenPopup] = useState(false);

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist({ id }));
    enqueueSnackbar("Movie removed from wishlist!", {
      variant: "success",
      autoHideDuration: 1500,
    });
  };

  return (
    <>
      {openPopup && (
        <OPopupImage
          isOpen={openPopup}
          setIsOpen={setOpenPopup}
          image={movie.Poster}
          title={movie.Title}
        />
      )}
      <section className="relative w-full cursor-pointer h-[17rem] rounded-md">
        <div onClick={() => setOpenPopup(true)}>
          <div
            className="h-[15rem] absolute w-full bg-no-repeat bg-cover bg-center rounded-t-md"
            style={{
              backgroundImage: `url(${movie.Poster})`,
            }}
          />
          <div className="w-full px-2 py-3 absolute bottom-7 flex items-center justify-center">
            <p className="text-xs font-semibold text-white text-center text-ellipsis overflow-hidden">
              {`${movie.Title} (${movie.Year})`}
            </p>
          </div>
        </div>
        <div
          onClick={
            wishlist
              ? () => handleRemoveFromWishlist(movie?.imdbID)
              : () => navigate(`/movie/${movie?.imdbID}`)
          }
          className="w-full h-[2rem] bg-primary hover:bg-red-800 hover:duration-500 hover:ease-in-out transition-all flex justify-center items-center absolute bottom-0 rounded-b-md"
        >
          {wishlist && <HiOutlineTrash size={18} className="mr-1" />}
          <p className="text-sm font-bold">{wishlist ? "Remove" : "Details"}</p>
        </div>
      </section>
    </>
  );
};

export default MMovieCard;
