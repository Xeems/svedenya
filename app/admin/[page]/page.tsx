// src/app/admin/[page]/page.tsx
import { promises as fs } from "fs"
import path from "path"
import { notFound } from "next/navigation"
import Link from "next/link"
import UniversalAdminEngine from "@/components/admin/UniversalAdminEngine"
import { ADMIN_PAGES } from "@/constants/adminPages"
import { SectionSchema } from "@/@types/schema"

interface AdminPageProps {
  params: Promise<{ page: string }>
}

export default async function DynamicAdminPage({ params }: AdminPageProps) {
  const { page } = await params
  
  const pageInfo = ADMIN_PAGES[page]
  if (!pageInfo) {
    notFound()
  }
  const jsonPath = path.join(
    process.cwd(), 
    "app", 
    "(pages)", 
    pageInfo.folderName, 
    pageInfo.jsonFileName
  )

  let initialData: SectionSchema[] = []
  
  try {
    const fileContents = await fs.readFile(jsonPath, "utf8")
    initialData = JSON.parse(fileContents)
  } catch (error) {
    console.error(`Файл не найден или пуст: ${jsonPath}. Инициализируем пустой массив.`);
  }

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 overflow-y-auto">
        <UniversalAdminEngine 
          initialData={initialData} 
          pageFile={pageInfo.jsonFileName} 
          pageSlug={pageInfo.slug} 
        />
      </main>
    </div>
  )
}
