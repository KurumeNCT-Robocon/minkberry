import type { Story } from "@ladle/react";
import { FaBox, FaCog, FaPencilAlt, FaQuestion } from "react-icons/fa";
import HoverLinkWithIcon from "./HoverLinkWithIcon";

const icons: { [index: string]: JSX.Element } = {
  box: <FaBox />,
  pencil: <FaPencilAlt />,
  cog: <FaCog />,
  question: <FaQuestion />,
};

export const ButtonWithIconStory: Story<{
  icon: string;
  content: string;
}> = ({ icon, content }) => (
  <HoverLinkWithIcon href="#" iconComponent={icons[icon]} content={content} />
);

ButtonWithIconStory.args = {
  content: "在庫",
};

ButtonWithIconStory.argTypes = {
  icon: {
    options: Object.keys(icons),
    control: { type: "select" },
  },
};
