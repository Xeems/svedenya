// src/components/admin/SectionWrapper.tsx
"use client"

import React from "react"
import { ArrowUp, ArrowDown, Trash2, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "cn"

interface SectionWrapperProps {
  name: string
  type: "verticalTable" | "horizontalTable" | "list" | "signedDocument" | "link" | "text"
  isFirst: boolean
  isLast: boolean
  typeHidden?: boolean
  onNameChange: (newName: string) => void
  onTypeChange: (newType: "verticalTable" | "horizontalTable" | "list") => void
  onMove: (direction: "up" | "down") => void
  onDelete: () => void
  onToggleHidden: () => void
  children: React.ReactNode
}

export default function SectionWrapper({
  name,
  type,
  isFirst,
  isLast,
  onNameChange,
  onTypeChange,
  onToggleHidden,
  typeHidden,
  onMove,
  onDelete,
  children
}: SectionWrapperProps) {
  return (
    <div className={cn("border-2 border-slate-200 hover:border-slate-300 p-5 rounded-xl bg-white space-y-4 relative shadow-inner")}>
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2 rounded-lg border">
        <div className="flex flex-col gap-x-2 w-full gap-y-2">
          <Input
            value={name || ""}
            onChange={(e) => onNameChange(e.target.value)}
            className="font-bold text-sm h-8 bg-white max-w-125"
            placeholder="Название секции (H2)"
          />

          <div className="flex flex-row justify-between w-full">
            <div className="flex items-center gap-1 text-xs text-slate-500 font-medium">
              <Layers className="size-3.5 ml-2 text-slate-400" />
              <select
                value={type}
                onChange={(e) => onTypeChange(e.target.value as any)}
                className="h-7 border rounded bg-white text-xs px-1 font-semibold"
              >
                <option value="verticalTable">Вертикальная таблица</option>
                <option value="horizontalTable">Горизонтальная таблица</option>
                <option value="list">Список</option>
                <option value='signedDocument'>Документ</option>
                <option value='link'>ссылка</option>
                <option value='text'>Текст</option>
              </select>
            
              <Button
                size="icon"
                variant="ghost"
                className={cn(`h-7 w-7 text-slate-400"}`,
                  typeHidden && "text-amber-600 bg-amber-50"
                )}
                onClick={onToggleHidden}
              //title={typeHidden ? "Секция скрыта от пользователей" : "Секция видна пользователям"}
              >
                {typeHidden ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
              </Button>

            </div>        

            <div className="flex items-center gap-x-1 ml-auto">
              <Button size="icon" variant="ghost" className="h-7 w-7" disabled={isFirst} onClick={() => onMove("up")}>
                <ArrowUp className="size-3.5" />
              </Button>
              <Button size="icon" variant="ghost" className="h-7 w-7" disabled={isLast} onClick={() => onMove("down")}>
                <ArrowDown className="size-3.5" />
              </Button>
              <Button size="icon" variant="ghost" className="h-7 w-7 text-red-500 hover:bg-red-50" onClick={onDelete}>
                <Trash2 className="size-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}
