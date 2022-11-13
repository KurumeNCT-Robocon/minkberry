import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import DrawerMenu from "../ui-parts/DrawerMenu";
import MemoCard from "../ui-parts/MemoCard";
import SideBar from "../ui-parts/SideBar";

type ContentPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const LayoutWithMenu: React.FC<ContentPageLayoutProps> = ({
  title,
  children,
}) => (
  <Stack>
    <Stack direction="row" padding={5}>
      <Box display={{ base: "block", md: "none" }}>
        {" "}
        {/* for mobile */}
        <DrawerMenu />
      </Box>

      <Heading>{title}</Heading>
    </Stack>

    <Stack direction="row" alignItems="start">
      <Box display={{ base: "none", md: "block" }} width={300} px={6}>
        {" "}
        {/* for desktop */}
        <SideBar />
      </Box>

      <Box>{children}</Box>
      <MemoCard
        width="300"
        height="500"
        placeholder="このメモは保存されません"
      />
    </Stack>
  </Stack>
);

export default LayoutWithMenu;
