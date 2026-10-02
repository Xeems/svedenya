import PageH1Header from "@/components/PageH1Header";
import eduStanData from './eduStandarts.json'
import { Metadata } from "next";
import { SectionSchema } from "@/@types/schema";
import SectionParser from "@/components/SectionParser";




export const metadata: Metadata = {
  title: "Образовательне стандраты и требования",
};

export default function EduStandartsPage() {
  const data = eduStanData as SectionSchema[]
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header >Образовательне стандраты и требования</PageH1Header>
      {data.map((section) =>
              <section key={section.sectionId} className='space-y-4'>
                {section.name &&<h2 className="text-xl font-semibold">{section.name}</h2>}
                <SectionParser section={section}/>
              </section>
            )}
    </main>
  )
}