import { Button, VStack } from "@chakra-ui/react";
import { FaBox, FaCog, FaPencilAlt, FaQuestion } from "react-icons/fa";

const SideBar: React.FC = () => (
  <VStack as="nav" width="full">
    <Button leftIcon={<FaBox />} variant="ghost" width="full" as="a" href="#">
      在庫
    </Button>
    <Button
      leftIcon={<FaPencilAlt />}
      variant="ghost"
      width="full"
      as="a"
      href="#"
    >
      作業
    </Button>
    <Button
      leftIcon={<FaQuestion />}
      variant="ghost"
      width="full"
      as="a"
      href="#"
    >
      ヘルプ
    </Button>
    <Button leftIcon={<FaCog />} variant="ghost" width="full" as="a" href="#">
      設定
    </Button>
  </VStack>
);

export default SideBar;
