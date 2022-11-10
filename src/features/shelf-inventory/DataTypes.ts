import { DateTime } from "luxon";

/**
 * 棚在庫管理で登録するデータ
 */
export type ShelfInventoryTransaction = {
  /**
   * 登録者
   */
  registerer: string;
  /**
   * 物品名
   */
  partName: string;
  /**
   * 購入日
   */
  purchaseDate: DateTime;
  /**
   * 個数
   */
  count: number;
  /**
   * コメント
   */
  notes: string | undefined;
};

/**
 * 現在棚にある部品のデータ
 */
export type ShelfInventory = {
  /**
   * 登録者
   */
  registerer: string;
  /**
   * 物品名
   */
  partName: string;
  /**
   * 購入日
   */
  lastPurchaseDate: DateTime;
  /**
   * 今棚にあるこの部品の個数
   */
  totalCount: number;
  /**
   * コメント
   */
  notes: string | undefined;
};
