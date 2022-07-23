import React from "react";
import { useParams } from "react-router-dom";
import { useFetchMovie } from "../../hooks/movie";

const MovieDetail = () => {
  const params = useParams();
  const { data } = useFetchMovie(params?.id || "");

  console.log(data);
  return <div>MovieDetail</div>;
};

export default MovieDetail;
