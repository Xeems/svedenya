import { SectionSchema } from "@/@types/schema";
import PageH1Header from "@/components/PageH1Header";
import budgetData from "./budget.json"
import { Metadata } from "next";
import SectionParser from "@/components/SectionParser";

export const metadata: Metadata = {
  title: "Финансово-хозяйственная деятельность",
};

export default function BudgetPage() {
  const data = budgetData as SectionSchema[]

  return (
    <main className="space-y-8">
      <PageH1Header>Финансово-хозяйственная деятельность</PageH1Header>
      {data.map((section) =>
                  <section key={section.sectionId} className='space-y-4'>
                    {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
                    <SectionParser section={section}/>
                  </section>
                )}
    </main>
  )    
}
