import React from "react";
import { useParams } from "react-router-dom";
import { MdStarRate } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { Divider } from "@mui/material";

import { useFetchMovie } from "../../hooks/movie";
import ALoading from "../../components/atoms/ALoading";
import AButton from "../../components/atoms/AButton";

const MovieDetail = () => {
  const params = useParams();
  const { data, isLoading } = useFetchMovie(params?.id || "");

  return (
    <main className="text-white xs:mt-5 mt-4 xs:mb-0 mb-28">
      {isLoading && (
        <div className="flex justify-center my-6">
          <ALoading />
        </div>
      )}
      {data && (
        <div className="flex gap-5 flex-wrap">
          <div className="sm:w-2/5 w-full">
            <img
              src={data?.Poster}
              alt="-"
              className="object-cover rounded-sm shadow-sm w-full"
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
                <div className="flex flex-col text-sm">
                  <p>Actors</p>
                  <p>Writers</p>
                  <p>Director</p>
                  <p>Genre</p>
                  <p>Production</p>
                  <p>Released</p>
                  <p>Country</p>
                </div>
                <div className="flex flex-col text-sm">
                  <p>{data.Actors}</p>
                  <p>{data.Writer}</p>
                  <p>{data.Director}</p>
                  <p>{data.Genre}</p>
                  <p>{data.Production}</p>
                  <p>{data.Released}</p>
                  <p>{data.Country}</p>
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

            <div className="fixed inset-x-0 bottom-0 bg-white sm:bg-transparent sm:p-0 p-4 sm:static sm:mt-5 mt-0 z-20">
              <AButton variant="contained">
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
