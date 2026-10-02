// src/components/admin/AdminHeader.tsx
"use client"

import { Plus, PlusIcon, Save, SaveIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdminHeaderProps {
  pageFile: string
  onAddSection: (type: "verticalTable" | "horizontalTable" | "list") => void
  onSave: () => void
}

export default function AdminHeader({ pageFile, onAddSection, onSave }: AdminHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b pb-6">
      <div>
        <p className="font-mono mt-0.5">Редактируемый файл: {pageFile}</p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button size="sm" variant="outline" onClick={() => onAddSection("verticalTable")} className="text-xs">
          <PlusIcon className="size-3 mr-1" />Новаая секция
          </Button>
        <Button onClick={onSave} className="bg-green-600 hover:bg-green-700 text-white size-sm text-xs font-semibold">
          <SaveIcon className="size-3.5 mr-1" /> Сохранить всё
        </Button>
      </div>
    </div>
  )
}
