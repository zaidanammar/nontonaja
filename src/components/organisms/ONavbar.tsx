import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { debounce } from "lodash";

import ABadge from "../atoms/ABadge";
import AButton from "../atoms/AButton";
import MSearchbar from "../molecules/MSearchbar";

const ONavbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [OpenSearchBar, setOpenSearchBar] = useState(false);

  //   const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
  //     setAnchorEl(event.currentTarget);
  //   };

  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <nav className="sm:h-[5.5rem] h-[5rem] w-full fixed inset-0 z-20 bg-slate-200 shadow-2xl">
      <section className="flex sm:gap-5 items-center h-full w-full container mx-auto">
        <div className="w-fit">
          <div className="sm:flex hidden">
            <h1 className="text-4xl font-bold text-primary">ZaifliX</h1>
          </div>
          {pathname !== "/home" && (
            <div className="sm:hidden flex">
              <BiArrowBack size={32} />
            </div>
          )}
        </div>

        <div className="flex-1 flex justify-center sm:gap-5 gap-3">
          <div className="w-full h-9">
            <MSearchbar
              onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchInput(e.target.value);
              }, 200)}
              onParentFocus={() => setOpenSearchBar(true)}
              onParentBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setOpenSearchBar(false);
                }
              }}
              placeholder="Cari film? Cari disini yuk"
            >
              {/* {OpenSearchBar && data && (
                  <div className="bg-white w-full px-2 mt-2 shadow-sm rounded">
                    {data?.products?.length === 0 &&
                      data?.outlets?.length === 0 && (
                        <p className="text-xs text-gray ml-2 py-4">No result</p>
                      )}
                    {data.products.length > 0 && (
                      <>
                        <p className="text-sm ml-2 pt-3 mb-2">Products</p>
                        <Divider />
                        <MenuList dense>
                          {data.products.map((product, index) => {
                            return (
                              <MenuItem
                                onClick={() => {
                                  navigateTo("/product?search=" + product.name);
                                  setOpenSearchBar(false);
                                }}
                                sx={{ color: "gray" }}
                                key={index}
                              >
                                {product.name}
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </>
                    )}
                  </div>
                )} */}
            </MSearchbar>

            {/* {auth.accessToken && (
              <div className="flex justify-evenly gap-4 sm:gap-6 items-center">
                <div
                  className="cursor-pointer sm:w-full w-8"
                  onClick={() => navigateTo("/cart")}
                >
                  <Badge
                    badgeContent={dataCounter?.data}
                    color="primary"
                    max={99}
                  >
                    <BsCart2 size={25} className="fill-primary" />
                  </Badge>
                </div>
                <div className="sm:flex mt-1 hidden cursor-pointer">
                  <Badge badgeContent={1000} color="primary" max={99}>
                    <IoIosNotificationsOutline
                      size={30}
                      className="fill-primary"
                    />
                  </Badge>
                </div>
                <div
                  className="cursor-pointer w-8 sm:hidden"
                  onClick={() => navigateTo("/account")}
                >
                  <Avatar sx={{ width: "30px", height: "30px" }} />
                </div>
              </div>
            )} */}
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
