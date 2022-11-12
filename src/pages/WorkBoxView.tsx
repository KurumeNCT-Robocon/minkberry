import { DateTime } from "luxon";
import { VStack } from "@chakra-ui/react";
import { FC } from "react";
import WorkBoxCard from "../features/work-box/WorkBoxCard";
import type { WorkBox } from "../features/work-box/DataTypes";
import ContentPage from "../layouts/ContentPage";

const boxes: WorkBox[] = [
  {
    boxTitle: "箱１",
    userName: "ゆかり",
    startUpDate: DateTime.fromISO("2022-11-11"),
    purpose: "進捗を生成するので使います",
  },
  {
    boxTitle: "箱２",
    userName: "あかり",
    startUpDate: DateTime.fromISO("2022-11-11"),
    purpose: "進捗を生成するので使います",
  },
];

const WorkBoxView: FC = () => (
  <ContentPage title="使用中の箱">
    <VStack>
      {boxes.map(box => (
        <WorkBoxCard
          key={box.boxTitle}
          boxTitle={box.boxTitle}
          userName={box.userName}
          startUpDate={box.startUpDate}
          purpose={box.purpose}
        />
      ))}
    </VStack>
  </ContentPage>
);

export default WorkBoxView;
