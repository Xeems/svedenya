import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { getPageJson } from "@/lib/getPageJson";

export default async function DocumentPage() {
  const data = await getPageJson('document')
  return (
    <main className='space-y-8'>
          <PageH1Header>Документы</PageH1Header>
          {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
        </main>
    )
}