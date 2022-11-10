import type { Story } from "@ladle/react";
import React from "react";
import HoverLink from "./HoverLink";

export const HoverLinkStory: Story<{
  children: React.ReactNode;
}> = ({ children }) => <HoverLink>{children}</HoverLink>;

HoverLinkStory.args = {
  children: "Link",
};
