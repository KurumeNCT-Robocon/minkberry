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
import React from "react";

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
  <Box
    padding={4}
    width={{ base: "24rem", sm: "38rem", md: "34rem", lg: "42rem" }}
    borderWidth={1}
    margin={2}
  >
    <Stack
      align={{ base: "center", md: "stretch" }}
      textAlign={{ base: "center", md: "left" }}
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
              <Td>
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
