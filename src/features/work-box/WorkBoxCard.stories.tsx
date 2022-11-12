import type { Story } from "@ladle/react";
import { DateTime } from "luxon";
import WorkBoxCard from "./WorkBoxCard";

export const WorkBoxStory: Story<{
  boxTitle: string;
  userName: string;
  startUpDate: DateTime;
  purpose: string;
}> = ({ boxTitle, userName, startUpDate, purpose }) => (
  <WorkBoxCard
    boxTitle={boxTitle}
    userName={userName}
    startUpDate={startUpDate}
    purpose={purpose}
  />
);

WorkBoxStory.args = {
  boxTitle: "箱１",
  userName: "唯岸雪",
  startUpDate: DateTime.fromISO("2022-10-11"),
  purpose: "犯人は箱が欲しかったなどと供述しており。\n完成した基板入れ"
};

