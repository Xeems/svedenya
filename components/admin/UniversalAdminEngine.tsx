// src/components/admin/UniversalAdminEngine.tsx
"use client"

import React, { useState } from "react"
import AdminHeader from "./AdminHeader"
import SectionWrapper from "./SectionWrapper"
import VerticalTableEditor from "./VerticalTableEditor"
import HorizontalTableEditor from "./HorizontalTableEditor"
import ListEditor from "./ListEditor"
import { PolymorphicValue, SectionSchema } from "@/@types/schema"
import { saveSectionData } from "@/actions/save-action"
import PolymorphicSectionEditor from "./PolymorphicSectionEditor"

interface UniversalAdminEngineProps {
  initialData: SectionSchema[]
  pageFile: string
  pageSlug: string 
}

export default function UniversalAdminEngine({ initialData, pageFile, pageSlug }: UniversalAdminEngineProps) {
  const [sections, setSections] = useState<SectionSchema[]>(initialData)

  const handleAddSection = (type: "verticalTable" | "horizontalTable" | "list") => {
    const newSectionId = "section-" + crypto.randomUUID()
    const base = { sectionId: newSectionId, name: "Новая секция", type } as any
    if (type === "verticalTable") base.data = []
    else if (type === "horizontalTable") { base.headers = ["Колонка 1"]; base.data = [] }
    else base.data = []
    setSections([...sections, base])
  }

const handleSave = async () => {
  // Передаем pageSlug вместо имени файла, чтобы сервер сам определил правильную папку роута
  const result = await saveSectionData(pageSlug, pageFile, sections)
  if (result.success) {
    alert("Изменения успешно сохранены! Публичная страница обновлена.")
  } else {
    alert("Ошибка сохранения: " + result.error)
  }
}

  return (
    <div className="w-full space-y-8 mx-auto bg-white rounded-xl shadow-sm">
      <AdminHeader pageFile={pageFile} onAddSection={handleAddSection} onSave={handleSave} />

      {sections.map((section, sIdx) => (
        <SectionWrapper
          key={section.sectionId}
          name={section.name || ""}
          type={section.type}
          isFirst={sIdx === 0}
          isLast={sIdx === sections.length - 1}
          onNameChange={(newName) => setSections(sections.map(s => s.sectionId === section.sectionId ? { ...s, name: newName } : s))}
          onTypeChange={(newType) => setSections(sections.map(s => s.sectionId === section.sectionId ? { ...s, type: newType, data: [] } as any : s))}
          onDelete={() => setSections(sections.filter(s => s.sectionId !== section.sectionId))}
          onMove={(dir) => {
            const next = [...sections]; const target = dir === "up" ? sIdx - 1 : sIdx + 1
            const temp = next[sIdx]; next[sIdx] = next[target]; next[target] = temp; setSections(next)
          }}
          typeHidden={section.hidden}
          onToggleHidden={() => setSections(sections.map((s) => s.sectionId === section.sectionId ? {...s, hidden: !s.hidden} : s))}
        >
          {section.type === "verticalTable" && (
            <VerticalTableEditor 
              data={section.data} 
              onFieldChange={(fIdx, updated) => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "verticalTable" ? { ...s, data: s.data.map((f, i) => i === fIdx ? updated : f) } : s))}
              onAddField={() => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "verticalTable" ? { ...s, data: [...s.data, { label: "Новое поле", type: "text", text: "—" }] } : s))}
              onDeleteField={(fIdx) => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "verticalTable" ? { ...s, data: s.data.filter((_, i) => i !== fIdx) } : s))}
            />
          )}

          {section.type === "horizontalTable" && (
            <HorizontalTableEditor 
              sectionId={section.sectionId}
              headers={section.headers || []}
              rows={section.data || []} 
              hiddenColumns={section.hiddenColumns}
              onHeadersChange={(h) => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "horizontalTable" ? { ...s, headers: h } : s))}
              
              onRowItemPropChange={(rId, newProp) => setSections(sections.map(s => {
                if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                  return { ...s, data: s.data.map(r => r.rowId === rId ? { ...r, rowItemProp: newProp } : r) }
                }
                return s
              }))}
              
              onCellChange={(rId, cIdx, updated) => setSections(sections.map(s => {
                if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                  return { ...s, data: s.data.map(r => r.rowId === rId ? { ...r, cells: r.cells.map((c, i) => i === cIdx ? updated : c) } : r) }
                }
                return s
              }))}
              
              onAddRow={() => setSections(sections.map(s => {
                if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                  const currentHeadersLength = s.headers?.length || 1
                  return { 
                    ...s, 
                    data: [...(s.data || []), { 
                      rowId: "row-" + crypto.randomUUID(), 
                      rowItemProp: "", 
                      cells: Array.from({ length: currentHeadersLength }, () => ({ type: "text", text: "—", itemProp: "" })) 
                    }] 
                  }
                }
                return s
              }))}
              
              onDeleteRow={(rId) => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "horizontalTable" ? { ...s, data: s.data.filter(r => r.rowId !== rId) } : s))}
              
              onAddColumn={() => setSections(sections.map(s => {
                  if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                      const newHeaders = [...(s.headers || []), `Колонка ${(s.headers?.length || 0) + 1}`]
                      const newData = (s.data || []).map(row => ({
                      ...row,
                      cells: [...row.cells, { 
                          type: "text" as const, 
                          text: "—", 
                          itemProp: "" 
                      } as PolymorphicValue]
                      }))
                      return { ...s, headers: newHeaders, data: newData }
                  }
                  return s
                  }))}
              
              onToggleColumnHidden={(colIdx) => setSections(sections.map(s => {
                if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                  const currentHidden: number[] = (s as any).hiddenColumns || []
                  const nextHidden = currentHidden.includes(colIdx)
                    ? currentHidden.filter(i => i !== colIdx) // Показываем
                    : [...currentHidden, colIdx]            // Скрываем
                  return { ...s, hiddenColumns: nextHidden }
                }
                return s
              }))}

              // НАСТРОЙКА: Удаление столбца и вырезание ячейки по индексу из всех строк
              onDeleteColumn={(colIdx) => setSections(sections.map(s => {
                if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                  const newHeaders = (s.headers || []).filter((_, i) => i !== colIdx)
                  const newData = (s.data || []).map(row => ({
                    ...row,
                    cells: row.cells.filter((_, i) => i !== colIdx) // Вырезаем ячейку из массива по индексу удаленного столбца
                  }))
                  return { ...s, headers: newHeaders, data: newData }
                }
                return s
              }))}

              onToggleRowHidden={(rId) => setSections(sections.map(s => {
                if (s.sectionId === section.sectionId && s.type === "horizontalTable") {
                  return {
                    ...s,
                    // Находим нужную строку по ID и инвертируем её флаг hidden
                    data: s.data.map(r => r.rowId === rId ? { ...r, hidden: !r.hidden } : r)
                  }
                }
                return s
              }))}
            />
          )}

          {section.type === "list" && (
            <ListEditor 
              data={section.data}
              onItemChange={(iIdx, updated) => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "list" ? { ...s, data: s.data.map((item, i) => i === iIdx ? updated : item) } : s))}
              onAddItem={() => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "list" ? { ...s, data: [...s.data, { type: "text", text: "Новая запись" }] } : s))}
              onDeleteItem={(iIdx) => setSections(sections.map(s => s.sectionId === section.sectionId && s.type === "list" ? { ...s, data: s.data.filter((_, i) => i !== iIdx) } : s))}
            />
          )}

          {(section.type === "link" || section.type === "text" || section.type === "signedDocument") &&(
            <PolymorphicSectionEditor
              section={section}
              onChange={(updatedSection) => setSections(sections.map(s => s.sectionId === section.sectionId ? updatedSection : s))}
            />
          )}
        </SectionWrapper>
      ))}
    </div>
  )
}
