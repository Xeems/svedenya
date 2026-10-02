import { promises as fs } from "fs"
import path from "path"
import { SectionSchema } from "@/@types/schema"
import UniversalAdminEngine from "@/components/admin/UniversalAdminEngine"

export default async function AdminCommonPage() {
  // Читаем файл данных
  const jsonPath = path.join(process.cwd(), "/app/(pages)/education/education.json")
  const fileContents = await fs.readFile(jsonPath, "utf8")
  const initialData: SectionSchema[] = JSON.parse(fileContents)

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <UniversalAdminEngine initialData={initialData} pageFile="common.json" />
    </div>
  )
}
