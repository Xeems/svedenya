// src/components/admin/HorizontalTableEditor.tsx
"use client"

import React from "react"
import { Plus, Settings, Trash2, Tag, Columns, X, EyeOffIcon, EyeIcon } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import PolymorphicFieldEditor from "./PolymorphicFieldEditor"
import { HorizontalRow } from "@/@types/schema"
import { cn } from "cn"

interface HorizontalTableEditorProps {
  sectionId: string
  headers: string[]
  rows: HorizontalRow[]
  hiddenColumns?: number[]
  onHeadersChange: (newHeaders: string[]) => void
  onRowItemPropChange: (rowId: string, newProp: string) => void
  onCellChange: (rowId: string, cellIdx: number, updatedCell: any) => void
  onAddRow: () => void
  onDeleteRow: (rowId: string) => void
  onAddColumn: () => void          
  onDeleteColumn: (colIdx: number) => void 
  onToggleColumnHidden: (colIdx: number) => void
  onToggleRowHidden: (rowId: string) => void
}

export default function HorizontalTableEditor({
  sectionId,
  headers = [], 
  rows = [],    
  hiddenColumns,
  onHeadersChange,
  onRowItemPropChange,
  onCellChange,
  onAddRow,
  onDeleteRow,
  onAddColumn,
  onDeleteColumn,
  onToggleColumnHidden,
  onToggleRowHidden
}: HorizontalTableEditorProps) {
  
  const safeHeaders = Array.isArray(headers) ? headers : ["Новая колонка"]
  const safeRows = Array.isArray(rows) ? rows : []
  const safeHiddenCols = Array.isArray(hiddenColumns) ? hiddenColumns.map(Number) : []

  return (
    <div className="space-y-3">
      {/* Кнопки управления геометрией таблицы */}
      <div className="flex gap-x-2">
        <Button size="sm" variant="outline" onClick={onAddRow} className="text-xs h-7">
          <Plus className="size-3 mr-1" /> Добавить строку
        </Button>
        <Button size="sm" variant="outline" onClick={onAddColumn} className="text-xs h-7 bg-blue-50/50 hover:bg-blue-50 text-blue-700 border-blue-200">
          <Columns className="size-3 mr-1" /> Добавить столбец
        </Button>
      </div>

      <div className="rounded-md border overflow-x-auto max-w-full">
        <Table>
          <TableHeader >
            <TableRow>
              <TableHead className="w-35 p-2 font-mono text-[10px] text-slate-500 bg-slate-100/30 border-r align-middle">
                Микроразметка строки
              </TableHead>
              
              {safeHeaders.map((h, hIdx) => {
                const isColHidden = safeHiddenCols.includes(hIdx)

                return (
                  <TableHead 
                    key={sectionId + "-h-" + hIdx} 
                    className={`p-2 min-w-37.5 relative group/header border-r last:border-r-0 ${
                      isColHidden ? "bg-amber-50/40 border-amber-200" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-y-1 pr-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center w-full justify-between gap-x-3">
                          {/* Иконка переключателя скрытия столбца на сайте */}
                          <Button
                            type="button"
                            size="icon"
                            variant="ghost"
                            onClick={() => onToggleColumnHidden(hIdx)}
                            className={`h-4 w-4 rounded-full`}
                            title={isColHidden ? "Столбец скрыт на сайте" : "Скрыть столбец на сайте"}
                          >
                            {isColHidden ? <EyeOffIcon className="size-4" /> : <EyeIcon className="size-4" />}
                          </Button>
                          
                          {/* Полное удаление столбца */}
                          {safeHeaders.length > 1 && (
                            <Button 
                              type="button"
                              size="icon" 
                              variant="ghost" 
                              onClick={() => onDeleteColumn(hIdx)}
                              className="h-4 w-4 text-destructive/80 hover:text-destructive/90 rounded-full"
                              title="Удалить этот столбец"
                            >
                              <X className="size-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <Input 
                        value={h || ""} 
                        onChange={(e) => {
                          const newHeaders = [...safeHeaders]
                          newHeaders[hIdx] = e.target.value
                          onHeadersChange(newHeaders)
                        }}
                        className={`h-7 text-xs font-bold ${isColHidden ? "border-amber-300 text-amber-900" : ""}`}
                        placeholder={`Заголовок ${hIdx + 1}`}
                      />
                    </div>
                  </TableHead>
                )
              })}
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {safeRows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={safeHeaders.length + 2} className="text-center p-8 text-xs text-slate-400 italic">
                  Таблица пуста. Нажмите «Добавить строку», чтобы начать заполнение данных.
                </TableCell>
              </TableRow>
            ) : (
              safeRows.map((row, rowIndex) => (
                <TableRow key={row.rowId || rowIndex} className={cn("hover:bg-slate-50/30", row.hidden && "bg-gray-200")}>
                  {/* Атрибут строки */}
                  <TableCell className="p-2 bg-slate-50/30 flex flex-row items-center border-r align-middle">
                    <div className="flex flex-row items-center gap-x-1">
                      <Input
                        value={row.rowItemProp || ""}
                        onChange={(e) => onRowItemPropChange(row.rowId, e.target.value)}
                        className="h-7 text-[10px] font-mono p-1 px-1.5 "
                        placeholder="itemprop строки"
                      />
                    </div>
                    <Button variant={"ghost"} className="p-2 py-0" onClick={() => onToggleRowHidden(row.rowId)}>
                      {row.hidden ? <EyeOffIcon className="size-4 shrink-0"/> : <EyeIcon className="size-4 shrink-0"/>}
                    </Button>
                    
                  </TableCell>

                  {/* Ячейки строки */}
                  {Array.isArray(row.cells) && safeHeaders.map((_, cIdx) => {
                    // Важнейший фолбек: если столбец добавили, а в строке еще нет этой ячейки, создаем заглушку
                    const cell = row.cells[cIdx] || { type: "text", text: "—", itemProp: "" }

                    return (
                      <TableCell key={row.rowId + "-c-" + cIdx} className="p-2 max-w-40 truncate align-middle border-r last:border-r-0">
                        <div className="flex items-center justify-between gap-1 border p-1 rounded bg-slate-50/50 text-[11px] min-h-8">
                          <span className="truncate block max-w-28 font-medium text-slate-700">
                            {cell.text || "—"}
                          </span>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="icon" variant="ghost" className="h-5 w-5 opacity-60 hover:opacity-100 shrink-0">
                                <Settings className="size-2.5" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-120">
                              <PolymorphicFieldEditor cell={cell} onChange={(updated) => onCellChange(row.rowId, cIdx, updated)} />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </TableCell>
                    )
                  })}
                  
                  {/* Действие: Удалить строку */}
                  <TableCell className="p-2 align-middle text-center">
                    <Button size="icon" variant="ghost" className="text-red-500 h-7 w-7 hover:bg-red-50" onClick={() => onDeleteRow(row.rowId)}>
                      <Trash2 className="size-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
