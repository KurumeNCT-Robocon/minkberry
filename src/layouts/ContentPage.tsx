import { Box, Container, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import DrawerMenu from "../ui-parts/DrawerMenu";
import SideBar from "../ui-parts/SideBar";

type ContentPageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const MobileLayout: React.FC<ContentPageLayoutProps> = ({
  title,
  children,
}) => (
  <Stack padding={5}>
    <Stack direction="row">
      <Box>
        <DrawerMenu />
      </Box>

      <Heading>{title}</Heading>
    </Stack>

    <Box width="full">{children}</Box>
  </Stack>
);

const DesktopLayout: React.FC<ContentPageLayoutProps> = ({
  title,
  children,
}) => (
  <Container maxWidth={1500} padding={10}>
    <Stack>
      <Heading>{title}</Heading>

      <Stack direction="row">
        <Box width={300} pr={8}>
          <SideBar />
        </Box>

        <Box width="80%">{children}</Box>
      </Stack>
    </Stack>
  </Container>
);

const LayoutWithMenu: React.FC<ContentPageLayoutProps> = ({
  title,
  children,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return <MobileLayout title={title}>{children}</MobileLayout>;
  }
  return <DesktopLayout title={title}>{children}</DesktopLayout>;
};

export default LayoutWithMenu;
