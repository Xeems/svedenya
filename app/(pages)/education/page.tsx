import PageH1Header from "@/components/PageH1Header";
import { Metadata } from "next";
import SectionParser from "@/components/SectionParser";
import { getPageJson } from "@/lib/getPageJson";


export const metadata: Metadata = {
  title: "Образование",
};

export default async function EducationPage() {
  const data = await getPageJson('education')
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header >Образование</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
  )
}