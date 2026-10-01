import { Table, TableBody, TableCell, TableRow } from './ui/table';
import ValueReader from './ValueReader';
import { VerticalTableSection } from '@/@types/schema';

interface VerticalTableProps {
  table: VerticalTableSection
}

export default async function VerticalTable(props: VerticalTableProps) {
  return (
    <Table>
      <TableBody>
        {props.table.data.map((row, index) => {
          return (
            <TableRow key={index} >
              <TableCell>
                {row.label}
              </TableCell>
              <TableCell
              >
                <ValueReader props={row} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
