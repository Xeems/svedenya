import PageH1Header from "@/components/PageH1Header";
import { Metadata } from "next";
import SectionParser from "@/components/SectionParser";
import { getPageJson } from "@/lib/getPageJson";

export const metadata: Metadata = {
  title: "Образовательне стандраты и требования",
};

export default async function EduStandartsPage() {
  const data = await getPageJson('eduStandarts')
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header >Образовательне стандраты и требования</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
  )
}