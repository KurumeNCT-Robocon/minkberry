import { FC } from "react";
import { Textarea } from "@chakra-ui/react";

type MemoCardProps = {
  // eslint-disable-next-line react/require-default-props
  width?: string | number | undefined;
  // eslint-disable-next-line react/require-default-props
  height?: string | number | undefined;
  placeholder: string;
};
const MemoCard: FC<MemoCardProps> = ({ width, height, placeholder }) => (
  <Textarea
    width={width}
    height={height}
    resize="none"
    placeholder={placeholder}
  />
);

export default MemoCard;
