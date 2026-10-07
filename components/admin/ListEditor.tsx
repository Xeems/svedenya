// src/components/admin/ListEditor.tsx
"use client"

import React, { useState, useEffect } from "react"
import { Plus, Settings, Trash2, ArrowUp, ArrowDown, FileText, Link2, ShieldCheck, EyeOff } from "lucide-react"
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
  onMoveItem: (itemIdx: number, direction: "up" | "down") => void
}

export default function ListEditor({ data, onItemChange, onAddItem, onDeleteItem, onMoveItem }: ListEditorProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const safeData = Array.isArray(data) ? data : []

  // Вспомогательная функция для рендеринга бейджа типа контента
  const renderTypeBadge = (type: string) => {
    switch (type) {
      case "text":
        return (
          <span className="inline-flex items-center gap-x-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
            <FileText className="size-3 text-slate-500" /> Текст
          </span>
        )
      case "link":
        return (
          <span className="inline-flex items-center gap-x-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
            <Link2 className="size-3 text-blue-500" /> Ссылка
          </span>
        )
      case "signedDocument":
        return (
          <span className="inline-flex items-center gap-x-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-green-50 text-green-700 border border-green-200">
            <ShieldCheck className="size-3 text-green-600" /> Документ с ЭЦП
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-2">
      <div className="rounded-lg border overflow-hidden bg-white shadow-sm">
        <Table>
          <TableBody>
            {safeData.map((item: any, iIdx) => {
              const isFirst = iIdx === 0
              const isLast = iIdx === safeData.length - 1
              const isItemHidden = item.hidden || false // Проверяем флаг скрытия элемента

              return (
                <TableRow 
                  key={iIdx} 
                  // Если элемент скрыт — делаем всю строчку затенённой оранжевым оттенком
                  className={`transition-colors ${isItemHidden ? "bg-amber-50/30 hover:bg-amber-50/50" : "hover:bg-slate-50/50"}`}
                >
                  {/* Контент элемента списка */}
                  <TableCell className="p-3 text-xs font-semibold text-slate-800">
                    <div className="flex flex-col text-left space-y-1">
                      
                      {/* Панель системных индикаторов (Тип контента, Статус видимости, itemprop) */}
                      <div className="flex flex-wrap items-center gap-2">
                        {/* ИНДИКАТОР ТИПА ПОЛЯ */}
                        {renderTypeBadge(item.type)}

                        {/* ИНДИКАТОР СКРЫТИЯ НА САЙТЕ */}
                        {isItemHidden && (
                          <span className="inline-flex items-center gap-x-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300 uppercase tracking-tight animate-pulse">
                            <EyeOff className="size-3 text-amber-700" /> Скрыто на сайте
                          </span>
                        )}

                        {/* АТРИБУТ РОСОБРНАДЗОРА */}
                        {item.itemProp && (
                          <span className="text-[10px] text-slate-400 font-mono tracking-tight bg-slate-100/60 px-1 py-0.5 rounded">
                            itemprop="{item.itemProp}"
                          </span>
                        )}
                      </div>

                      {/* Текст анкора/содержимого */}
                      <span className={`text-slate-700 block pt-0.5 ${isItemHidden ? "text-slate-500 italic font-normal" : "font-medium"}`}>
                        {item.text || "—"}
                      </span>
                    </div>
                  </TableCell>

                  {/* Блок действий и сортировки */}
                  <TableCell className="p-2 text-right w-[160px] align-middle">
                    <div className="flex items-center justify-end gap-0.5">
                      
                      {/* Стрелочка ВВЕРХ */}
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-slate-500 hover:bg-slate-100"
                        disabled={isMounted ? isFirst : false}
                        onClick={() => onMoveItem(iIdx, "up")}
                        title="Переместить выше"
                      >
                        <ArrowUp className="size-3.5" />
                      </Button>

                      {/* Стрелочка ВНИЗ */}
                      <Button
                        type="button"
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-slate-500 hover:bg-slate-100"
                        disabled={isMounted ? isLast : false}
                        onClick={() => onMoveItem(iIdx, "down")}
                        title="Переместить ниже"
                      >
                        <ArrowDown className="size-3.5" />
                      </Button>

                      {/* Кнопка настроек шестерёнки */}
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button size="icon" variant="outline" className={`h-7 w-7 ml-1 ${isItemHidden ? "border-amber-300 hover:bg-amber-50" : ""}`}>
                            <Settings className="size-3" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[420px]">
                          <PolymorphicFieldEditor cell={item} onChange={(updated) => onItemChange(iIdx, updated)} />
                        </DialogContent>
                      </Dialog>

                      {/* Кнопка удаления элемента */}
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        className="h-7 w-7 text-red-500 hover:bg-red-50" 
                        onClick={() => onDeleteItem(iIdx)}
                        title="Удалить"
                      >
                        <Trash2 className="size-3.5" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </div>
      <Button size="sm" variant="outline" className="w-full text-xs h-8 border-dashed" onClick={onAddItem}>
        <Plus className="size-3.5 mr-1" /> Добавить элемент списка (Документ)
      </Button>
    </div>
  )
}
