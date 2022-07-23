import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton, MenuItem, MenuList } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { debounce } from "lodash";

import ABadge from "../atoms/ABadge";
import AButton from "../atoms/AButton";
import MSearchbar from "../molecules/MSearchbar";
import { useFetchMovies } from "../../hooks/movie";

const ONavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchInput, setSearchInput] = useState("");
  const [OpenSearchBar, setOpenSearchBar] = useState(false);

  const { data } = useFetchMovies({
    dependency: searchInput,
    search: searchInput,
    enabled: searchInput.length <= 0 ? false : true,
  });

  const handleSearch = (keyword: string) => {
    navigate({ pathname, search: `s=${keyword}` });
  };

  return (
    <nav className="sm:h-[5.5rem] h-[5rem] w-full fixed inset-0 z-20 bg-slate-200 shadow-2xl">
      <section className="flex sm:gap-5 items-center h-full w-full container mx-auto">
        <div className="w-fit">
          <div className="sm:flex hidden">
            <h1
              onClick={() => navigate("/movie")}
              className="text-4xl font-bold text-primary"
            >
              ZaifliX
            </h1>
          </div>
          {pathname !== "/movie" && (
            <div className="sm:hidden flex">
              <IconButton onClick={() => navigate(-1)}>
                <IoIosArrowBack size={32} />
              </IconButton>
            </div>
          )}
        </div>

        <div className="flex-1 flex justify-center sm:gap-5 gap-3">
          <div className="w-full h-9">
            <MSearchbar
              onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchInput(e.target.value);
              }, 300)}
              onParentFocus={() => setOpenSearchBar(true)}
              onParentBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenSearchBar(false);
                }
              }}
              placeholder="Cari film? Cari disini yuk"
            >
              {OpenSearchBar && (
                <div className="bg-white w-full px-2 mt-2 shadow-sm rounded">
                  {!data?.pages[0] && (
                    <p className="text-xs text-gray ml-2 py-3">No results</p>
                  )}
                  {data?.pages[0] && data?.pages[0]?.Search?.length > 0 && (
                    <section>
                      <MenuList dense>
                        {data.pages[0]?.Search?.map((movie) => {
                          return (
                            <MenuItem
                              onClick={async () => {
                                handleSearch(movie.Title);
                                setOpenSearchBar(false);
                              }}
                              sx={{ color: "gray" }}
                              key={movie.imdbID}
                            >
                              {movie.Title}
                            </MenuItem>
                          );
                        })}
                      </MenuList>
                    </section>
                  )}
                </div>
              )}
            </MSearchbar>
          </div>

          <div className="flex items-center sm:w-[30%] h-10">
            <div className="sm:flex hidden w-full h-full">
              <AButton>
                <p className="ml-3">Wishlist</p>
                <IconButton>
                  <ABadge badgeContent={2} color="secondary">
                    <BsCart2 className="fill-white" size={18} />
                  </ABadge>
                </IconButton>
              </AButton>
            </div>
            <div className="sm:hidden">
              <IconButton>
                <ABadge badgeContent={2}>
                  <BsCart2 className="fill-primary" size={24} />
                </ABadge>
              </IconButton>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default ONavbar;
