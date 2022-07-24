import React, { Suspense } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import ALoading from "../components/atoms/ALoading";
import Wishlist from "../pages/wishlist/Wishlist";

const Movie = React.lazy(() => import("../pages/movie/Movie"));
const MovieDetail = React.lazy(() => import("../pages/movie/MovieDetail"));

const MainRoutes = () => {
  return (
    <section className="sm:pt-24 pt-[5rem]">
      <Suspense
        fallback={
          <div className="flex justify-center pt-10">
            <ALoading />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/movie" element={<Movie />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/" element={<Navigate replace to="/movie" />} />
          </Route>
        </Routes>
      </Suspense>
    </section>
  );
};

export default MainRoutes;
