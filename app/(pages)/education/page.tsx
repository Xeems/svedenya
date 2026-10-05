import PageH1Header from "@/components/PageH1Header";
import eduData from './education.json'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";
import { SectionSchema } from "@/@types/schema";
import SectionParser from "@/components/SectionParser";


export const metadata: Metadata = {
  title: "Образование",
};

export default function page() {
  const data = eduData as SectionSchema[]
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header >Образование</PageH1Header>
      {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
  )
}