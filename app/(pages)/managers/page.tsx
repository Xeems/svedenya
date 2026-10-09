import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { Metadata } from "next";
import { getPageJson } from "@/lib/getPageJson";

export const metadata: Metadata = {
  title: "Руководство",
};

export default async function ManagerPage() {
  const data = await getPageJson('managers')
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header>Руководство</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}