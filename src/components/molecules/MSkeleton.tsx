import { Skeleton } from "@mui/material";

export const MovieCardSkeleton = () => {
  return (
    <div
      className="p-4 bg-white shadow-sm w-full min-w-[150px]"
    >
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={130}
      />
      <Skeleton variant="text" height={15} sx={{ marginTop: "10px" }} />
      <Skeleton
        variant="text"
        height={15}
        width="70%"
        sx={{ backgroundColor: "#D0071E" }}
      />
      <Skeleton variant="text" height={15} width="30%" />
    </div>
  );
};
