import { SectionSchema } from "@/@types/schema";
import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import interData from "./inter.json"
import SectionParser from "@/components/SectionParser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Международное сотрудничество",
};
  
export default function InterPage() {
  const data = interData as SectionSchema[]
  return (
    <main className="space-y-8">
      <PageH1Header>Международное сотрудничество</PageH1Header>
     {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
    )
}