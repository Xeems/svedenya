import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import managersData from './managers.json'
import { SectionSchema } from "@/@types/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Руководство",
};

export default function ManagerPage() {
   const data = managersData as SectionSchema[]
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header>Руководство</PageH1Header>
      {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}