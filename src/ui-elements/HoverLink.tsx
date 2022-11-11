import { Link, LinkProps } from "@chakra-ui/react";

const HoverLink: React.FC<LinkProps> = (props: LinkProps) => (
  <Link rounded="base" _hover={{ bg: "gray.200" }} p={2} {...props} />
);

export default HoverLink;
