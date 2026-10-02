// src/app/actions/save-action.ts
"use server"

import { promises as fs } from "fs"
import path from "path"
import { revalidatePath } from "next/cache"
import { SectionSchema } from "@/@types/schema"

export async function saveSectionData(fileName: string, updatedData: SectionSchema[]) {
  console.log(fileName, )
  try {
    // 1. Строим абсолютный путь к файлу (например: src/data/basic-info.json)
    const dataDirectory = path.join(process.cwd(), "app/(pages)/common/")
    const filePath = path.join(dataDirectory, fileName)

    // 2. Превращаем объект обратно в строку JSON с красивыми отступами в 2 пробела
    const jsonString = JSON.stringify(updatedData, null, 2)

    // 3. Перезаписываем файл в системе
    await fs.writeFile(filePath, jsonString, "utf8")

    // 4. ГАРАНТИЯ СТАТИКИ: Говорим Next.js очистить кэш и пересобрать 
    // публичную страницу sveden/common, чтобы робот Рособрнадзора сразу увидел правки
    revalidatePath("/sveden/common")

    return { success: true }
  } catch (error: any) {
    console.error("Ошибка Server Action:", error)
    return { success: false, error: error?.message || "Неизвестная ошибка файловой системы" }
  }
}
