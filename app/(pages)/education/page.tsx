import PageH1Header from "@/components/PageH1Header";
import eduData from './education.json'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";
import { SectionSchema } from "@/@types/schema";
import SectionParser from "@/components/SectionParser";



const nirData = [
    {
      code: "3.2.4",
      name: "Медицина труда",
      perechen: "—",
      profile: "—",
      level: "Аспирантура",
      naprav: "—",
      result: "—",
      base: "—",
    },
    {
      code: "31.08.42",
      name: "Неврология",
      perechen: "—",
      profile: "—",
      level: "Ординатура",
      naprav: "—",
      result: "—",
      base: "—",
    },
    {
      code: "31.08.44",
      name: "Профпатология",
      perechen: "—",
      profile: "—",
      level: "Ординатура",
      naprav: "—",
      result: "—",
      base: "—",
    },
    {
      code: "31.08.49",
      name: "Терапия",
      perechen: "—",
      profile: "—",
      level: "Ординатура",
      naprav: "—",
      result: "—",
      base: "—",
    },
  ]

const graduateData = [
    {
      code: "3.2.4",
      name: "Медицина труда",
      profile: "Медицина труда",
      graduatesCount: "1",
      employedCount: "1",
    },
    {
      code: "31.08.42",
      name: "Неврология",
      profile: "Неврология",
      graduatesCount: "1",
      employedCount: "1",
    },
    {
      code: "31.08.44",
      name: "Профпатология",
      profile: "Профпатология",
      graduatesCount: "3",
      employedCount: "3",
    },
    {
      code: "31.08.49",
      name: "Терапия",
      profile: "Терапия",
      graduatesCount: "0",
      employedCount: "0",
    },
  ]

export const metadata: Metadata = {
  title: "Образование",
};

export default function page() {
  const data = eduData as SectionSchema[]
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header >Образование</PageH1Header>
      {data.map((section) =>
              <section key={section.sectionId} className='space-y-4'>
                {section.name &&<h2 className="text-xl font-semibold">{section.name}</h2>}
                <SectionParser section={section}/>
              </section>
            )}
    </main>
  )
}