import { Icon, VStack } from "@chakra-ui/react";
import { FaBox, FaCog, FaPencilAlt, FaQuestion } from "react-icons/fa";
import HoverLinkWithIcon from "./HoverLinkWithIcon";

const SideBar: React.FC = () => (
  <VStack spacing="xl" as="nav">
    <HoverLinkWithIcon
      href="#"
      iconComponent={<Icon as={FaBox} />}
      content="在庫"
    />
    <HoverLinkWithIcon
      href="#"
      iconComponent={<Icon as={FaPencilAlt} />}
      content="作業"
    />
    <HoverLinkWithIcon
      href="#"
      iconComponent={<Icon as={FaQuestion} />}
      content="ヘルプ"
    />
    <HoverLinkWithIcon
      href="#"
      iconComponent={<Icon as={FaCog} />}
      content="設定"
    />
  </VStack>
);

export default SideBar;
