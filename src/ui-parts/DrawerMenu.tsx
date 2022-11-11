import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";
import SideBar from "./SideBar";

const DrawerMenu: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<Icon as={FaBars} onClick={onOpen} />}
      />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        finalFocusRef={buttonRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>メニュー</DrawerHeader>
            <DrawerBody>
              <SideBar />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
