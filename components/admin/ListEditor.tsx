// src/components/admin/ListEditor.tsx
"use client"

import React from "react"
import { Plus, Settings, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import PolymorphicFieldEditor from "./PolymorphicFieldEditor"
import { PolymorphicValue } from "@/@types/schema"

interface ListEditorProps {
  data: PolymorphicValue[]
  onItemChange: (itemIdx: number, updatedItem: any) => void
  onAddItem: () => void
  onDeleteItem: (itemIdx: number) => void
}

export default function ListEditor({ data, onItemChange, onAddItem, onDeleteItem }: ListEditorProps) {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableBody>
            {data.map((item: any, iIdx) => (
              <TableRow key={iIdx}>
                <TableCell className="p-3 text-xs font-semibold text-slate-800">
                  {item.text || "—"}
                </TableCell>
                <TableCell className="p-2 text-right w-[90px]">
                  <div className="flex items-center justify-end gap-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="outline" className="h-7 w-7"><Settings className="size-3" /></Button>
                      </DialogTrigger>
                      <DialogContent>
                        <PolymorphicFieldEditor cell={item} onChange={(updated) => onItemChange(iIdx, updated)} />
                      </DialogContent>
                    </Dialog>
                    <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500" onClick={() => onDeleteItem(iIdx)}>
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button size="sm" variant="outline" className="w-full text-xs h-8 border-dashed" onClick={onAddItem}>
        <Plus className="size-3.5 mr-1" /> Добавить элемент списка (Документ)
      </Button>
    </div>
  )
}
