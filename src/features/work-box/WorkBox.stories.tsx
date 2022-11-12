import type { Story } from "@ladle/react";
import { DateTime } from "luxon";
import WorkBox from "./WorkBox";

export const WorkBoxStory: Story<{
  title: string;
  userName: string;
  startUpDate: DateTime;
  purpose: string;
}> = ({title, userName, startUpDate, purpose}) => (

<WorkBox title={title}
  userName={userName}
  startUpDate={startUpDate}
purpose={purpose}

></WorkBox>
);
