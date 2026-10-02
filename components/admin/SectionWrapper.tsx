// src/components/admin/SectionWrapper.tsx
"use client"

import React from "react"
import { ArrowUp, ArrowDown, Trash2, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface SectionWrapperProps {
  name: string
  type: "verticalTable" | "horizontalTable" | "list" | "signedDocument" | "link" | "text"
  isFirst: boolean
  isLast: boolean
  onNameChange: (newName: string) => void
  onTypeChange: (newType: "verticalTable" | "horizontalTable" | "list") => void
  onMove: (direction: "up" | "down") => void
  onDelete: () => void
  children: React.ReactNode
}

export default function SectionWrapper({
  name,
  type,
  isFirst,
  isLast,
  onNameChange,
  onTypeChange,
  onMove,
  onDelete,
  children
}: SectionWrapperProps) {
  return (
    <div className="border-2 border-slate-200 hover:border-slate-300 p-5 rounded-xl bg-white space-y-4 relative shadow-inner">
      <div className="flex flex-wrap items-center justify-between gap-2 bg-slate-50 p-2 rounded-lg border">
        <div className="flex items-center gap-x-2 w-full sm:w-auto">
          <Input 
            value={name || ""} 
            onChange={(e) => onNameChange(e.target.value)}
            className="font-bold text-sm h-8 bg-white max-w-125"
            placeholder="Название секции (H2)"
          />
          
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
          </div>
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

      {children}
    </div>
  )
}
