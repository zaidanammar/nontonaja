import { Badge } from "@mui/material";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  badgeContent: number;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | undefined;
  max?: number;
};

const ABadge = ({
  children,
  badgeContent = 2,
  color = "primary",
  max = 99,
}: Props) => {
  return (
    <Badge
      badgeContent={badgeContent}
      color={color}
      max={max}
      sx={{
        "& .MuiBadge-badge": {
          fontSize: "0.5rem",
          height: 15,
          minWidth: 15,
        },
      }}
    >
      {children}
    </Badge>
  );
};

export default ABadge;
