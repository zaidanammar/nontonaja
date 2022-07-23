import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../core/movie/entities";
import OPopupImage from "../organisms/OPopupImage";

type Props = {
  movie: IMovie;
};

const MMovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();
  const [openPopup, setOpenPopup] = useState(false);

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
            className="h-[15rem] absolute w-full bg-no-repeat bg-cover bg-center rounded-md"
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
          onClick={() => navigate(`/movie/${movie?.imdbID}`)}
          className="w-full h-[2rem] bg-primary hover:bg-red-800 hover:duration-500 hover:ease-in-out transition-all flex justify-center items-center absolute bottom-0 rounded-b-md"
        >
          <p className="text-sm">Details</p>
        </div>
      </section>
    </>
  );
};

export default MMovieCard;
