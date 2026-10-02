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
      {data.map((section) =>
              <section key={section.sectionId} className='space-y-4'>
                {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
                  <SectionParser section={section}/>
                </section>
            )}
    </main>
    )
}