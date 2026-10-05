// src/components/HorizontalTable.tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import ValueReader from "./ValueReader"
import { HorizontalTableSection } from "@/@types/schema";

export default function HorizontalTable({ table }: { table: HorizontalTableSection }) {
  return (
    <div className={`rounded-md border bg-white ${table.hidden ? "hidden" : ""}`} {...(table.hidden && { "aria-hidden": "true" })}>
      <Table>
        <TableHeader>
          <TableRow>
            {table.headers.map((header, idx) => {
              const isColHidden = table.hiddenColumns?.[idx];
              return (
                <TableHead key={idx} className={isColHidden ? "hidden" : "font-semibold text-sm"}>
                  {header}
                </TableHead>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {table.data.map((row, rowIndex) => {
            const isRowHidden = table.hidden || row.hidden;
            return (
              <TableRow 
                key={row.rowId || rowIndex} 
                {...(row.rowItemProp && { itemProp: row.rowItemProp })}
                className={isRowHidden ? "hidden" : "hover:bg-slate-50/50"}
                {...(isRowHidden && { "aria-hidden": "true" })}
              >
                {row.cells.map((cell, cellIdx) => {
                  const isColHidden = table.hiddenColumns?.[cellIdx];
                  const isCellHidden = isRowHidden || isColHidden || cell.hidden;
                  return (
                    <TableCell 
                      key={row.rowId + "-" + cellIdx}
                      {...(cell.itemProp && { itemProp: cell.itemProp })}
                      className={isCellHidden ? "hidden" : "text-sm align-top"}
                      {...(isCellHidden && { "aria-hidden": "true" })}
                    >
                      <ValueReader props={cell} />
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}
