import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";

const MainRoutes = () => {
  return (
    <section className="sm:pt-28 pt-20">
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="/home" element={<Home />} />

          <Route path="/" element={<Navigate replace to="/home" />} />
        </Route>
      </Routes>
    </section>
  );
};

export default MainRoutes;
