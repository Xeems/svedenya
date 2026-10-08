// src/app/actions/save-action.ts
"use server"

import { promises as fs } from "fs"
import path from "path"
import { revalidatePath } from "next/cache"
import { SectionSchema } from "@/@types/schema"

export async function saveSectionData(pageSlug: string, fileName: string, updatedData: SectionSchema[]) {
  console.log(fileName, pageSlug )
  try {
    const dataDirectory = path.join(process.cwd(), "app/(pages)/")
    const filePath = path.join(dataDirectory, pageSlug, fileName)

    const jsonString = JSON.stringify(updatedData, null, 2)

    await fs.writeFile(filePath, jsonString, "utf8")

    revalidatePath("/sveden/common")

    return { success: true }
  } catch (error: any) {
    console.error("Ошибка Server Action:", error)
    return { success: false, error: error?.message || "Неизвестная ошибка файловой системы" }
  }
}
