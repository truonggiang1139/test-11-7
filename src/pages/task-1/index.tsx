import { Flex } from "@mantine/core";
import CustomTable from "./custom-table";
import Input from "../../components/input";
import { useState } from "react";
import { TableRow } from "../../types";

export default function Task1() {
  const [dataRow, setDataRow] = useState<TableRow[]>([]);

  const handleAddItem = (position: number, value: string) => {
    const index = position > 0 ? position - 1 : 0;
    const currentList = dataRow.length ? dataRow[dataRow.length - 1].list : [];

    return [
      ...currentList.slice(0, index),
      Number(value),
      ...currentList.slice(index),
    ];
  };

  const handleGetMinValue = (firstPosition: number, lastPosition: number) => {
    const currentList = dataRow.length ? dataRow[dataRow.length - 1].list : [];
    const targetedList = currentList.slice(firstPosition - 1, lastPosition);
    return targetedList.reduce(
      (min, current) => (current < min ? current : min),
      targetedList[0]
    );
  };

  const handleRequest = (value: string) => {
    const splitRequest = value.split(" ");
    if (splitRequest.length !== 3 || (splitRequest[0] !== "+" && splitRequest[0] !== "?")) {
      return;
    }
    let newList: number[] = dataRow.length
      ? dataRow[dataRow.length - 1].list
      : [];
    let newOutput: number | string = "";
    if (splitRequest[0] === "+") {
      newList = handleAddItem(Number(splitRequest[1]), splitRequest[2]);
    }
    
    if (splitRequest[0] === "?") {
      newOutput = handleGetMinValue(
        Number(splitRequest[1]),
        Number(splitRequest[2])
      );
    }

    setDataRow([
      ...dataRow,
      { request: value, list: newList, output: newOutput },
    ]);
  };

  return (
    <Flex w={500} direction={"column"} m={"auto"}>
      <Input handleRequest={handleRequest} />

      <CustomTable data={dataRow} />
    </Flex>
  );
}
