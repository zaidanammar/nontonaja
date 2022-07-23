import React from "react";
import { useNavigate } from "react-router-dom";
import { hog } from "../../assets";

const MMovieCard = () => {
  const navigate = useNavigate();
  
  return (
    <section
      className="relative w-full cursor-pointer h-[15rem] rounded-md hover:bg-black"
      //   onClick={() => navigate(`/product/${data?.id || 2}`)}
    >
      <div>
        <div
          className="h-[15rem] absolute w-full bg-no-repeat bg-cover bg-center rounded-md hover:bg-black "
            style={{
              backgroundImage: `url(${hog})`,
            }}
        />
        <div className="w-full px-2 py-3 absolute bottom-0 flex items-center justify-center">
          <p className="text-xs font-semibold text-white text-center text-ellipsis overflow-hidden">
            {`House Of Gucci (2021)`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MMovieCard;
