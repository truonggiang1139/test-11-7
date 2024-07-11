import { Button, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  return (
    <Flex gap={8} mb={20}>
      <Button onClick={() => navigate("/task-1")}>Task 1</Button>
      <Button onClick={() => navigate("/task-2")}>Task 2</Button>
      <Button onClick={() => navigate("/task-3")}>Task 3</Button>
    </Flex>
  );
}
