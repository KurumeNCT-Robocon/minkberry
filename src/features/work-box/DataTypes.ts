import { DateTime } from "luxon";

export type WorkBox = {
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
