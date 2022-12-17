import { Box, Heading, Stack } from "@chakra-ui/react";
import DrawerMenu from "../ui-parts/DrawerMenu";
import SideBar from "../ui-parts/SideBar";

type ContentPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const LayoutWithMenu: React.FC<ContentPageLayoutProps> = ({
  title,
  children,
}) => (
  <Box width="full" padding={{ base: 6, md: 16 }}>
    <Stack>
      <Stack direction="row">
        <Box display={{ base: "block", md: "none" }}>
          <DrawerMenu />
        </Box>

        <Heading>{title}</Heading>
      </Stack>

      <Stack direction="row" spacing={{ base: 0, md: 10 }}>
        <Box width="sm" display={{ base: "none", md: "block" }}>
          <SideBar />
        </Box>

        <Box width="full">{children}</Box>
      </Stack>
    </Stack>
  </Box>
);

export default LayoutWithMenu;
