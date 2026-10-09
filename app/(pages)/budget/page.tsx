import PageH1Header from "@/components/PageH1Header";
import { Metadata } from "next";
import SectionParser from "@/components/SectionParser";
import { getPageJson } from "@/lib/getPageJson";

export const metadata: Metadata = {
  title: "Финансово-хозяйственная деятельность",
};

export default async function BudgetPage() {
  const data = await getPageJson('budget')

  return (
    <main className="space-y-8">
      <PageH1Header>Финансово-хозяйственная деятельность</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
  )    
}
