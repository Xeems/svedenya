import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { getPageJson } from "@/lib/getPageJson";

export default async function ObjectsPage() {
  const data = await getPageJson('objects')
  return (
    <main className="space-y-8">
      <PageH1Header>Материально-техническое обеспечение и оснащѐнность образовательного процесса. Доступная среда</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}