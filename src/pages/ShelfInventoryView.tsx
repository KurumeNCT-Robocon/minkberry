import { DateTime } from "luxon";
import { Box, Button, VStack } from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import ShelfInventoryCard from "../features/shelf-inventory/ShelfInventoryCard";
import ContentPage from "../layouts/ContentPage";

import type { ShelfInventory } from "../features/shelf-inventory/DataTypes";

const inventories: ShelfInventory[] = [
  {
    registerer: "鏡華",
    partName: "皿頭小ねじ M3x5",
    lastPurchaseDate: DateTime.fromISO("2022-11-10"),
    totalCount: 10,
    notes:
      "これはメモこれはメモこれはメモこれはメモ\nhttps://www.monotaro.com/p/2901/8439/",
  },
  {
    registerer: "鏡華",
    partName: "六角穴付き小ねじ M3x5",
    lastPurchaseDate: DateTime.fromISO("2022-11-10"),
    totalCount: 10,
    notes: undefined,
  },
];

const ShelfInventoryView: React.FC = () => (
  <ContentPage title="現在の棚在庫">
    <VStack>
      <Box width="full">
        <Button leftIcon={<FaPlus />} width="full">
          在庫追加
        </Button>
      </Box>

      {inventories.map(inventory => (
        <ShelfInventoryCard
          key={inventory.partName}
          partName={inventory.partName}
          lastPurchaseDate={inventory.lastPurchaseDate}
          count={inventory.totalCount}
          notes={inventory.notes}
        />
      ))}
    </VStack>
  </ContentPage>
);

export default ShelfInventoryView;
