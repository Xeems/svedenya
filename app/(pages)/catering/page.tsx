import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import { Metadata } from "next";
import { getPageJson } from "@/lib/getPageJson";

export const metadata: Metadata = {
  title: "Организация питания в образовательной организации",
};

export default  async function CateringPage() {
  const data = await getPageJson('catering')
  return (
    <main className="space-y-8">
      <PageH1Header>Организация питания в образовательной организации</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}