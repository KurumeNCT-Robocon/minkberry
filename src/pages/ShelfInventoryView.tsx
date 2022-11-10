import { DateTime } from "luxon";
import React from "react";
import { VStack } from "@chakra-ui/react";
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
