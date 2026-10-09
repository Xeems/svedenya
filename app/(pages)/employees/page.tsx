import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { Metadata } from "next";
import { getPageJson } from "@/lib/getPageJson";


export const metadata: Metadata = {
  title: "Педагогический состав",
};

export default async function EmployeesPage() {
  const data = await getPageJson('employees')
  return (
    <main className="space-y-8">
      <PageH1Header>Педагогческий состав</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}