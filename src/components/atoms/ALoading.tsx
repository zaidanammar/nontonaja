import ReactLoading, { LoadingType } from "react-loading";

type Props = {
  type?: LoadingType;
  color?: string;
  width?: number;
  height?: number;
};

const ALoading = ({
  color = "#D0071E",
  width = 80,
  height = 80,
  type = "spin",
}: Props) => {
  return (
    <ReactLoading type={type} color={color} height={height} width={width} />
  );
};

export default ALoading;
