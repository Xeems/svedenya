// src/components/admin/VerticalTableEditor.tsx
"use client"

import React from "react"
import { Plus, Settings, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import PolymorphicFieldEditor from "./PolymorphicFieldEditor"
import { VerticalField } from "@/@types/schema"

interface VerticalTableEditorProps {
  data: VerticalField[]
  onFieldChange: (fieldIdx: number, updatedField: any) => void
  onAddField: () => void
  onDeleteField: (fieldIdx: number) => void
}

export default function VerticalTableEditor({ data, onFieldChange, onAddField, onDeleteField }: VerticalTableEditorProps) {
  return (
    <div className="space-y-2">
      <div className="rounded-lg border overflow-hidden">
        <Table>
          <TableBody>
            {data.map((field, fIdx) => (
              <TableRow key={fIdx}>
                <TableCell className="p-2 w-[30%]">
                  <Input 
                    value={field.label} 
                    onChange={(e) => onFieldChange(fIdx, { ...field, label: e.target.value })}
                    className="h-8 text-xs font-semibold"
                  />
                </TableCell>
                <TableCell className="p-2 text-xs text-slate-600 italic">
                  <span className="truncate block max-w-[400px]">{field.text || "—"}</span>
                </TableCell>
                <TableCell className="p-2 w-[90px] text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="outline" className="h-7 w-7"><Settings className="size-3" /></Button>
                      </DialogTrigger>
                      <DialogContent>
                        <PolymorphicFieldEditor cell={field} onChange={(updated) => onFieldChange(fIdx, updated)} />
                      </DialogContent>
                    </Dialog>
                    <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500" onClick={() => onDeleteField(fIdx)}>
                      <Trash2 className="size-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Button size="sm" variant="outline" className="w-full text-xs h-8 border-dashed" onClick={onAddField}>
        <Plus className="size-3.5 mr-1" /> Добавить параметр (строку)
      </Button>
    </div>
  )
}
