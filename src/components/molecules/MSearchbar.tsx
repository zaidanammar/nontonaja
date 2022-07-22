import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";
import { IconButton, InputBase } from "@mui/material";
import { IoIosSearch } from "react-icons/io";

type Props = {
  children: ReactNode;
  onParentFocus: FocusEventHandler<HTMLDivElement>;
  onParentBlur: FocusEventHandler<HTMLDivElement>;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  placeholder: string;
};

const MSearchbar = ({
  children,
  onParentFocus,
  onParentBlur,
  placeholder,
  onChange,
}: Props) => {
  return (
    <div onFocus={onParentFocus} onBlur={onParentBlur} className="h-full w-full">
      <div className="relative flex bg-white rounded-md shadow border">
        <InputBase
          onChange={onChange}
          sx={{ pl: 1.5, flex: 1, fontSize: "0.8rem" }}
          placeholder={placeholder}
          inputProps={{ "aria-label": `${placeholder}` }}
        />
        <IconButton>
          <IoIosSearch className="fill-primary" />
        </IconButton>
      </div>
      {children}
    </div>
  );
};

export default MSearchbar;
