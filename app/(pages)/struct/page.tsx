import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import structData from './struct.json'
import { SectionSchema } from "@/@types/schema";

export default function Page() {
  const data = structData as SectionSchema[]
  return (
    <main className='space-y-8'>
      <PageH1Header>
        Структура и органы управления образовательной организацией
      </PageH1Header>
      {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}             
    </main>  
      
  );
}
