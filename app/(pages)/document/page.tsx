import PageH1Header from "@/components/PageH1Header";
import docuementData from './document.json' 
import { SectionSchema } from "@/@types/schema";
import SectionParser from "@/components/SectionParser";

export default function page() {
  const data = docuementData as SectionSchema[]
  return (
    <main className='space-y-8'>
          <PageH1Header>Документы</PageH1Header>
          {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
        </main>
    )
}