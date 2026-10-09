import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { Metadata } from "next";
import { getPageJson } from "@/lib/getPageJson";

export const metadata: Metadata = {
  title: "Международное сотрудничество",
};
  
export default async function InterPage() {
  const data = await getPageJson('inter')
  return (
    <main className="space-y-8">
      <PageH1Header>Международное сотрудничество</PageH1Header>
     {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}