import { SectionSchema } from "@/@types/schema";
import PageH1Header from "@/components/PageH1Header";
import SectionParser from "@/components/SectionParser";
import cateringData from './catering.json'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Организация питания в образовательной организации",
};

export default  function CateringPage() {
  const data = cateringData as SectionSchema[]
  return (
    <main className="space-y-8">
      <PageH1Header>Организация питания в образовательной организации</PageH1Header>
      {data.map((section) =>
        <section key={section.sectionId} className='space-y-4'>
          {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
            <SectionParser section={section}/>
          </section>
      )}
    </main>
    )
}