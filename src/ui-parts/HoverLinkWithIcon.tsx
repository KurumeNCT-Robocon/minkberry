import React from "react";
import { Button, Text, HStack } from "@chakra-ui/react";
import HoverLink from "../ui-elements/HoverLink";

type HoverLinkWithIconProps = {
  href: string;
  iconComponent: JSX.Element;
  content: string;
};

const HoverLinkWithIcon: React.FC<HoverLinkWithIconProps> = ({
  href,
  iconComponent,
  content,
}) => (
  <Button
    colorScheme="teal"
    variant="ghost"
    size="lg"
    as={HoverLink}
    href={href}
  >
    <HStack direction="row">
      {iconComponent}
      <Text fontWeight="bold">{content}</Text>
    </HStack>
  </Button>
);

export default HoverLinkWithIcon;
