import React from 'react';


interface TableRowItem {
  label: string;
  value: React.ReactNode;
  itemPropName?: string;
  itemPropValue?: string;
}

interface TableProps {
  data: TableRowItem[];
}



export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {data.map((row, index) => {
          const isLast = index === data.length - 1;
          const borderClass = isLast ? 'border-b-0' : 'border-b border-slate-200';

          return (
            <tr key={index} className={borderClass}>
              <th 
                className="py-3 pr-4 text-left font-semibold text-slate-700 align-top w-1/3"
                {...(row.itemPropName ? { itemProp: row.itemPropName } : {})}
              >
                {row.label}
              </th>
              <td 
                className="py-3 text-slate-600 align-top"
                {...(row.itemPropValue ? { itemProp: row.itemPropValue } : {})}
              >
                {row.value}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
