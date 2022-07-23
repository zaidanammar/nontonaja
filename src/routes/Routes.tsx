import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Movie from "../pages/movie/Movie";

const MainRoutes = () => {
  return (
    <section className="sm:pt-24 pt-[4.5rem]">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/movie" element={<Movie />} />

          <Route path="/" element={<Navigate replace to="/movie" />} />
        </Route>
      </Routes>
    </section>
  );
};

export default MainRoutes;
