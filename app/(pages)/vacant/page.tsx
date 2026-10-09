import PageH1Header from "@/components/PageH1Header";
import { Metadata } from "next";
import SectionParser from "@/components/SectionParser";
import { getPageJson } from "@/lib/getPageJson";

export const metadata: Metadata = {
  title: "Вакантные места для перевода обучающихся",
};
  
export default async function VacantPage() {
  const data = await getPageJson('vacant')
  return (
    <main className="space-y-8">
      <PageH1Header>Вакантные места для перевода обучающихся</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}