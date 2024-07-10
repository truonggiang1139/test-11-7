import { Flex, Text } from "@mantine/core";
import Input from "../../components/input";
import { useState } from "react";
import Column from "../../components/column";

export default function Task3() {
  const [array, setArray] = useState<number[]>([]);
  const [waterVolume, setWaterVolume] = useState(0);
  const handleRequest = (value: string) => {
    const transformArray = value.split(",").map(Number);
    handleCaculateWaterVolume(transformArray);
    setArray(transformArray);
  };

  const createSubArray = (array: number[]) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      const subArray = [];
      subArray.push(array[i]);
      for (let j = i + 1; j < array.length; j++) {
        subArray.push(array[j]);
        if (array[j] >= subArray[0]) {
          i =  j - 1;
          break;
        }
      }
      result.push(subArray);
    }
    return result;
  };

  const handleCaculateWaterVolume = (arr: number[]) => {
    const subArrays = createSubArray(arr);
    let result = 0;
    subArrays.map((item) => {
      if (item.length <= 2) {
        return;
      }
      const depth = Math.min(item[0], item[item.length - 1]);

      for (let i = 1; i < item.length - 1; i++) {
        result += depth - item[i];
      }
    });

    setWaterVolume(result);
  };
  return (
    <Flex w={500} direction={"column"} m={"auto"}>
      <Input handleRequest={handleRequest} />

      {!!array.length && (
        <Flex direction={"column"} gap={50}  mt={30}>
           <Text size="lg">Your input: {array.join(',')}</Text>
          <Flex
            direction={"row"}
            gap={50}
            align={"flex-end"}
           
            mx={"auto"}
          >
            {array.map((item, index) => (
              <Column key={index} height={item} />
            ))}
          </Flex>

          <Text size="lg">Water Volume: {waterVolume}</Text>
        </Flex>
      )}
    </Flex>
  );
}
