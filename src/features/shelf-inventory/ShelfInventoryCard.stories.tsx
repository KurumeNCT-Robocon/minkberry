import type { Story } from "@ladle/react";
import { DateTime } from "luxon";
import ShelfInventoryCard from "./ShelfInventoryCard";

export const ShelfInventoryCardStory: Story<{
  partName: string;
  purchaseDate: string;
  count: number;
  notes: string | undefined;
}> = ({ partName, purchaseDate, count, notes }) => (
  <ShelfInventoryCard
    partName={partName}
    lastPurchaseDate={DateTime.fromISO(purchaseDate)}
    count={count}
    notes={notes}
  />
);

ShelfInventoryCardStory.args = {
  partName: "皿頭小ねじ M3x5",
  purchaseDate: "2022-11-10",
  count: 10,
  notes: "メモ書き",
};
