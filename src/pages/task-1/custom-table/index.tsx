import { Table } from "@mantine/core";
import { TableRow } from "../../../types";
type CustomTableProps = {
  data: TableRow[];
};
export default function CustomTable(props: CustomTableProps) {
  const { data } = props;
  const rows = data.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{element.request}</Table.Td>
      <Table.Td>{element.list.join(', ')}</Table.Td>
      <Table.Td>{element.output}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table mt={20}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Request</Table.Th>
          <Table.Th>List</Table.Th>
          <Table.Th>Output</Table.Th>

        </Table.Tr>
      </Table.Thead>

      <Table.Tbody styles={{
        tbody:{
          textAlign:'left'
        }
      }}>{rows}</Table.Tbody>
    </Table>
  );
}
