import { Box, Stack, Text } from "@chakra-ui/react";
import luxon from "luxon";

type WorkBoxProps = {
  title: string;
  userName: string;
  startUpDate: Date;
  purpose: string;
};

const WorkBox: React.FC<WorkBoxProps> = ({
  title,
  userName,
  startUpDate,
  purpose, }) =>(
    <Box>
      <Stack>
        <Text>{title}</Text>
        <Text>{"使用者"}</Text>
        <Text>{userName}</Text>
        <Text>{"使用日"}</Text>
        <Text>{startUpDate.getDate}</Text>
      </Stack>
    </Box>
  );

export default WorkBox;
