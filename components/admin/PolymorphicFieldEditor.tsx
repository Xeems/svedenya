// src/components/admin/PolymorphicFieldEditor.tsx
"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PolymorphicValue } from "@/@types/schema"
import { EyeOffIcon } from "lucide-react"
import { DialogContent } from "radix-ui/dialog"

interface FieldEditorProps {
  cell: any; // Принимает плоский объект ячейки/поля
  onChange: (updatedCell: any) => void;
}

export default function PolymorphicFieldEditor({ cell, onChange }: FieldEditorProps) {
  // Хэндлер изменения конкретного свойства внутри ячейки
  const handleChange = (key: string, value: string) => {
    onChange({ ...cell, [key]: value })
  }

  // Хэндлер для изменения вложенного объекта метаданных подписи
  const handleSignInfoChange = (key: string, value: string) => {
    onChange({
      ...cell,
      signInfo: {
        ...(cell.signInfo || {}),
        [key]: value
      }
    })
  }

  return (
    <DialogContent className="space-y-4  border bg-slate-50/50 text-left">
      {/* 1. Управление метаданными парсера (itemProp и тип) */}
      <div className="grid grid-cols-2 gap-2 border-b pb-3 mb-3">
        <div>
          <Label className="text-[10px] text-slate-500 font-mono">Атрибут itemprop</Label>
          <Input 
            value={cell.itemProp || ""} 
            onChange={(e) => handleChange("itemProp", e.target.value)} 
            placeholder="например: finYear"
            className="h-7 text-xs font-mono"
          />
        </div>
        <div>
          <Label className="text-[10px] text-slate-500 font-mono">Тип контента (type)</Label>
          <select 
            value={cell.type} 
            onChange={(e) => handleChange("type", e.target.value)}
            className="w-full h-7 text-xs border rounded-md px-2 bg-white"
          >
            <option value="text">text (Простой текст)</option>
            <option value="link">link (Внешняя ссылка)</option>
            <option value="signedDocument">signedDocument (Документ с ЭЦП)</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-2 rounded bg-amber-50/50 border mb-4">
          <div className="flex items-center gap-x-2">
            <EyeOffIcon className="size-4 " />
            <div className="flex flex-col">
              <span className="text-xs font-semibold">Режим скрытия тега</span>
            </div>
          </div>
          <input 
            type="checkbox" 
            checked={cell.hidden || false} 
            onChange={(e) => onChange({ ...cell, hidden: e.target.checked })}
            className="w-4 h-4 accent-amber-600 rounded cursor-pointer"
          />
        </div>
      </div>

      {/* 2. Рендеринг инпутов в зависимости от выбранного типа */}
      <div className="space-y-2">
        <Label className="text-xs font-medium text-slate-700">Текстовое значение / Анкор</Label>
        {cell.text && cell.text.includes("\n") || cell.itemProp?.includes("qualification") ? (
          <Textarea 
            value={cell.text || ""} 
            onChange={(e) => handleChange("text", e.target.value)}
            className="text-xs min-h-[60px]"
          />
        ) : (
          <Input 
            value={cell.text || ""} 
            onChange={(e) => handleChange("text", e.target.value)}
            className="h-8 text-xs"
          />
        )}
      </div>

      {/* Поля для ссылки (link и signedDocument) */}
      {(cell.type === "link" || cell.type === "signedDocument") && (
        <div className="space-y-2">
          <Label className="text-xs font-medium text-slate-700">Ссылка на файл / URL (href)</Label>
          <Input 
            value={cell.href || ""} 
            onChange={(e) => handleChange("href", e.target.value)}
            className="h-8 text-xs font-mono"
            placeholder="/docs/file.pdf"
          />
        </div>
      )}

      {/* Поля строго для документов с ЭЦП (signedDocument) */}
      {cell.type === "signedDocument" && (
        <div className="space-y-3 pt-2 border-t mt-2">
          <Label className="text-xs font-bold text-green-700">Сведения об электронной подписи (.sig)</Label>
          
          <div className="space-y-2">
            <Label className="text-[11px] text-slate-600">Ссылка на отсоединенную подпись (signHref)</Label>
            <Input 
              value={cell.signHref || ""} 
              onChange={(e) => handleChange("signHref", e.target.value)}
              className="h-8 text-xs font-mono"
              placeholder="/docs/file.pdf.sig"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <Label className="text-[11px] text-slate-600">Владелец ЭП (ФИО, должность)</Label>
              <Input 
                value={cell.signInfo?.owner || ""} 
                onChange={(e) => handleSignInfoChange("owner", e.target.value)}
                className="h-8 text-xs"
              />
            </div>
            <div>
              <Label className="text-[11px] text-slate-600">Дата и время подписания</Label>
              <Input 
                value={cell.signInfo?.dateSigning || ""} 
                onChange={(e) => handleSignInfoChange("dateSigning", e.target.value)}
                className="h-8 text-xs"
                placeholder="02.10.2026 12:00:00"
              />
            </div>
            <div>
              <Label className="text-[11px] text-slate-600">Кем выдан УЦ</Label>
              <Input 
                value={cell.signInfo?.issuer || ""} 
                onChange={(e) => handleSignInfoChange("issuer", e.target.value)}
                className="h-8 text-xs"
              />
            </div>
            <div>
              <Label className="text-[11px] text-slate-600">Хэш-ключ документа</Label>
              <Input 
                value={cell.signInfo?.hash || ""} 
                onChange={(e) => handleSignInfoChange("hash", e.target.value)}
                className="h-8 text-xs font-mono"
              />
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  )
}
