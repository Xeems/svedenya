import { SectionSchema } from "@/@types/schema";
import PageH1Header from "@/components/PageH1Header";
import vacantData from "./vacant.json"
import { Metadata } from "next";
import SectionParser from "@/components/SectionParser";

export const metadata: Metadata = {
  title: "Вакантные места для перевода обучающихся",
};
  
export default function VacantPage() {
  const data = vacantData as SectionSchema[]
  return (
    <main className="space-y-8">
      <PageH1Header>Вакантные места для перевода обучающихся</PageH1Header>
      {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}