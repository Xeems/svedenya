import { SectionSchema } from "@/@types/schema";
import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { Metadata } from "next";
import employeesData from './employees.json'


export const metadata: Metadata = {
  title: "Педагогический состав",
};

export default function EmployeesPage() {
  const data = employeesData as SectionSchema[]
  return (
    <main className="space-y-8">
      <PageH1Header>Педагогческий состав</PageH1Header>
      {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}