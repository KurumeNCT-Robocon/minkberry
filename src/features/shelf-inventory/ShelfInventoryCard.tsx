import {
  Box,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
import { DateTime } from "luxon";

type ShelfInventoryCardProps = {
  /**
   * 物品名
   */
  partName: string;
  /**
   * 購入日
   */
  lastPurchaseDate: DateTime;
  /**
   * 個数
   */
  count: number;
  /**
   * コメント
   */
  notes: string | undefined;
};

const ShelfInventoryCard: React.FC<ShelfInventoryCardProps> = ({
  partName,
  lastPurchaseDate,
  count,
  notes,
}) => (
  <Box padding={4} width="full" borderWidth={1}>
    <Stack
      align="stretch"
      textAlign="left"
      margin-top={{ base: 4, md: 0 }}
      margin-left={{ md: 6 }}
    >
      <Text
        fontWeight="bold"
        fontSize="xl"
        letterSpacing="wide"
        color="teal.600"
      >
        {partName}
      </Text>

      <TableContainer>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td width="20%">
                <Text fontWeight="bold">個数</Text>
              </Td>
              <Td>{count}個</Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">最終購入日</Text>
              </Td>
              <Td>{lastPurchaseDate.setLocale("ja").toLocaleString()}</Td>
            </Tr>
            <Tr>
              <Td>
                <Text fontWeight="bold">メモ</Text>
              </Td>
              <Td>
                <Box whiteSpace="pre-line">{notes}</Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  </Box>
);

export default ShelfInventoryCard;
