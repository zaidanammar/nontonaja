import { Button } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "text" | "contained" | "outlined";
  handleClick?: any;
  type?: "button" | "reset" | "submit";
};

const AButton = ({
  children,
  handleClick,
  variant = "contained",
  type = "button",
}: Props) => {
  return (
    <Button
      type={type}
      onClick={handleClick}
      variant={variant}
      sx={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </Button>
  );
};

export default AButton;
