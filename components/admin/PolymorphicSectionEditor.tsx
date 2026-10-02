// src/components/admin/StandaloneSectionEditor.tsx
"use client"

import React from "react"
import { Settings, FileText, Link2, ShieldCheck, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import PolymorphicFieldEditor from "./PolymorphicFieldEditor"
import { PolymorphicValueSection } from "@/@types/schema"

interface PolymorphicSectionEditorProps {
  section: PolymorphicValueSection
  onChange: (updatedSection: PolymorphicValueSection) => void
}

export default function PolymorphicSectionEditor({ section, onChange }: PolymorphicSectionEditorProps) {
  const renderIcon = () => {
    switch (section.type) {
      case "text": return <FileText className="size-4 text-slate-500" />
      case "link": return <Link2 className="size-4 text-blue-500" />
      case "signedDocument": return <ShieldCheck className="size-4 text-green-600" />
      default: return <HelpCircle className="size-4" />
    }
  }

  return (
    <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-xl border border-dashed border-slate-200">
      <div className="flex items-center gap-x-3 truncate">
        <div className="p-2 bg-white rounded-lg border shadow-sm shrink-0">
          {renderIcon()}
        </div>
        <div className="flex flex-col truncate text-left">
          <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">
            Тип значения: {section.type} | itemprop: {section.itemProp || "отсутствует"}
          </span>
          <span className="text-sm font-medium text-slate-700 truncate max-w-[450px]">
            {section.text || "—"}
          </span>
        </div>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm" variant="outline" className="h-8 text-xs">
            <Settings className="size-3.5 mr-1" /> Настроить контент
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[430px]">
          <DialogHeader>
            <DialogTitle>Параметры одиночного элемента</DialogTitle>
          </DialogHeader>
          <PolymorphicFieldEditor cell={section} onChange={onChange} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
