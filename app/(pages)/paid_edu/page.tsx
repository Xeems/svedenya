import PageH1Header from "@/components/PageH1Header";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Платные образовательные услуги",
};

export default function PaidEduPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Платные образовательные услуги</PageH1Header>
      Организация не предоставлят платных образовательных услуг
      <section className="hidden">
        <span itemProp="paidDog">Отсутствует</span>
        <span itemProp="paidEdu">Отсутствует</span>
        <span itemProp="paidSt">Отсутствует</span>
        <span itemProp="paidParents">Отсутствует</span>
      </section>
    </main>
    )
}