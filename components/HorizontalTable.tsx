import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import ValueReader from './ValueReader';
import { HorizontalTableSection,  } from '@/@types/schema';

interface HorisontalTableProps {
  table: HorizontalTableSection
}

export default async function HorizontalTable(props: HorisontalTableProps) {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                {props.table.headers.map((header, index) => 
                    <TableHead key={index + header}>{header}</TableHead>
                )}
            </TableRow>
        </TableHeader>
        <TableBody>
            {props.table.data.map((row, index) =>
                <TableRow key={row.rowId + index} itemProp={row.rowItemProp}>
                    {row.cells.map((cell, index) =>
                        <TableCell key={index + cell.value.text} >
                            <ValueReader value={cell.value} itemProp={cell.itemProp}/> 
                        </TableCell>
                    )}
                </TableRow>
            )}
        </TableBody>
    </Table>
  );
};
