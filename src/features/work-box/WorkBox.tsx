import { Box, Stack, Text } from "@chakra-ui/react";
import {DateTime} from "luxon";

type WorkBoxProps = {
  title: string;
  userName: string;
  startUpDate: DateTime;
  purpose: string;
};

const WorkBox: React.FC<WorkBoxProps> = ({
  title,
  userName,
  startUpDate,
  purpose, }) =>{
    const today = DateTime.now();

    return(
    <Box>
      <Stack>
        <Text>{title}</Text>
        <Text>{"使用者"}</Text>
        <Text>{userName}</Text>
        <Text>{"使用開始日"}</Text>
        <Text>{startUpDate.toString() }</Text>
        <Text>{"目的"}</Text>
        <Text>{purpose}</Text>
      </Stack>
    </Box>
    )
  };

export default WorkBox;
