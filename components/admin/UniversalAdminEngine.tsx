// src/components/admin/UniversalAdminEngine.tsx
"use client"

import React, { useState } from "react"
import { Plus, Trash2, Settings, Save } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import PolymorphicFieldEditor from "./PolymorphicFieldEditor"
import { SectionSchema } from "@/@types/schema"
import { saveSectionData } from "@/actions/save-action"
//import { saveSectionData } from "@/app/actions/save-action" // Наш Server Action

export default function UniversalAdminEngine({ initialData, pageFile }: { initialData: SectionSchema[], pageFile: string }) {
  const [sections, setSections] = useState<SectionSchema[]>(initialData)

  // 1. Изменение ячейки в горизонтальной таблице
  const updateHorizontalCell = (sectionId: string, rowId: string, cellIdx: number, updatedCell: any) => {
    setSections(sections.map(sec => {
      if (sec.sectionId === sectionId && sec.type === "horizontalTable") {
        return {
          ...sec,
          data: sec.data.map(row => {
            if (row.rowId === rowId) {
              const newCells = [...row.cells]
              newCells[cellIdx] = updatedCell
              return { ...row, cells: newCells }
            }
            return row
          })
        }
      }
      return sec
    }))
  }

  // 2. Добавление новой строки в горизонтальную таблицу
  const addRow = (sectionId: string, headersCount: number) => {
    setSections(sections.map(sec => {
      if (sec.sectionId === sectionId && sec.type === "horizontalTable") {
        const newRow = {
          rowId: "row-" + crypto.randomUUID(),
          rowItemProp: sec.rowItemProp || "",
          cells: Array.from({ length: headersCount }, () => ({
            type: "text",
            text: "—",
            itemProp: ""
          }))
        }
        return { ...sec, data: [...sec.data, newRow] }
      }
      return sec
    }))
  }

  // 3. Удаление строки
  const deleteRow = (sectionId: string, rowId: string) => {
    setSections(sections.map(sec => {
      if (sec.sectionId === sectionId && sec.type === "horizontalTable") {
        return { ...sec, data: sec.data.filter(row => row.rowId !== rowId) }
      }
      return sec
    }))
  }

  // 4. Отправка итогового стейта на сервер в Server Action
  const handleSave = async () => {
    const result = await saveSectionData(pageFile, sections)
    if (result.success) {
      alert("Данные успешно сохранены! Статический HTML пересобран.")
    } else {
      alert("Ошибка при сохранении: " + result.error)
    }
  }

  return (
    <div className="w-full space-y-8 max-w-5xl mx-auto p-6 bg-white rounded-xl border">
      <div className="flex justify-between items-center border-b pb-4">
        <h1 className="text-xl font-bold text-slate-800">Режим редактирования структуры</h1>
        <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-x-1">
          <Save className="size-4" /> Сохранить файл {pageFile}
        </Button>
      </div>

      {sections.map((section) => {
        if (section.type === "horizontalTable") {
          return (
            <div key={section.sectionId} className="space-y-3 border p-4 rounded-xl">
              <div className="flex justify-between items-center">
                <Input 
                  value={section.name || ""} 
                  onChange={(e) => setSections(sections.map(s => s.sectionId === section.sectionId ? { ...s, name: e.target.value } : s))}
                  className="font-semibold text-base w-[60%] h-8"
                />
                <Button size="sm" variant="outline" onClick={() => addRow(section.sectionId, section.headers.length)}>
                  <Plus className="size-4 mr-1" /> Добавить строку
                </Button>
              </div>

              <div className="rounded-md border overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50">
                    <TableRow>
                      {section.headers.map((h, i) => <TableHead key={i}>{h}</TableHead>)}
                      <TableHead className="w-[80px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {section.data.map((row) => (
                      <TableRow key={row.rowId}>
                        {row.cells.map((cell: any, cellIdx) => (
                          <TableCell key={cellIdx} className="p-2 align-top text-xs relative max-w-[150px] truncate">
                            <div className="group flex items-center justify-between gap-x-1 border p-1 rounded bg-slate-50/50">
                              <span className="truncate">{cell.text || "—"}</span>
                              
                              {/* Модальное окно настройки ячейки, её типа и itemprop */}
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="icon" variant="ghost" className="h-6 w-6 opacity-60 hover:opacity-100">
                                    <Settings className="size-3" />
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[450px]">
                                  <DialogHeader>
                                    <DialogTitle>Настройка параметров ячейки</DialogTitle>
                                  </DialogHeader>
                                  <PolymorphicFieldEditor 
                                    cell={cell} 
                                    onChange={(updated) => updateHorizontalCell(section.sectionId, row.rowId, cellIdx, updated)}
                                  />
                                </DialogContent>
                              </Dialog>
                            </div>
                          </TableCell>
                        ))}
                        <TableCell className="p-2">
                          <Button size="icon" variant="ghost" className="text-red-500 h-7 w-7" onClick={() => deleteRow(section.sectionId, row.rowId)}>
                            <Trash2 className="size-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )
        }
        return null
      })}
    </div>
  )
}
