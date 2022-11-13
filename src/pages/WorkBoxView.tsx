import { DateTime } from "luxon";
import { VStack, Button } from "@chakra-ui/react";
import { FC } from "react";
import { FaPencilAlt } from "react-icons/fa";
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
  //  const { isOpen, onOpen, onClose } = useDisclosure();
  <ContentPage title="使用中の箱">
    <Button
      colorScheme="teal"
      variant="ghost"
      size="lg"
      leftIcon={<FaPencilAlt />}
      padding={4}
      width={{ base: "24rem", sm: "38rem", md: "34rem", lg: "42rem" }}
      borderWidth={1}
      margin={2}
    >
      編集
    </Button>

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
