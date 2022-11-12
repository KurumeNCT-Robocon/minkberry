import {
  Box,
  Stack,
  TableContainer,
  Tbody,
  Table,
  Text,
  Tr,
  Td,
} from "@chakra-ui/react";
import { DateTime } from "luxon";

type WorkBoxCardProps = {
  /*
   * 箱の名前
   */
  boxTitle: string;
  /*
   * 箱の使用者
   */
  userName: string;
  /*
   * 箱の使用開始日 */
  startUpDate: DateTime;
  /*
   * 箱の使用目的
   */
  purpose: string | undefined;
};

const WorkBoxCard: React.FC<WorkBoxCardProps> = ({
  boxTitle,
  userName,
  startUpDate,
  purpose,
}) => {
  const today = DateTime.now();
  const dateDiff = Math.trunc(today.diff(startUpDate, ["days"]).days);

  return (
    <Box
      padding={4}
      width={{ base: "24rem", sm: "38rem", md: "34rem", lg: "42rem" }}
      borderWidth={1}
      margin={2}
    >
      <Stack>
        <Text fontWeight="bold" color="teal.600">
          {boxTitle}
        </Text>{" "}
        <TableContainer>
          {" "}
          <Table>
            {" "}
            <Tbody>
              <Tr>
                <Td>
                  <Text fontWeight="bold">使用者</Text>
                </Td>
                <Td>{userName}</Td>
              </Tr>
              <Tr>
                <Td>
                  <Text fontWeight="bold">使用日数</Text>
                </Td>
                <Td>{dateDiff}日</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Text fontWeight="bold">目的</Text>
        <Text whiteSpace="pre-line">{purpose}</Text>
      </Stack>
    </Box>
  );
};

export default WorkBoxCard;
