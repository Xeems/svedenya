import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

 const internationalData = [
    {
      state: "Республика Беларусь",
      organization: "ООО «Научно-практический центр МедЭвери»",
      contractDetails: "«Особенности организации производственной медицины в зависимости от структуры экономического региона». Срок действия 16.10.2023–16.10.2028.",
    },
  ]

export default async function InterPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Международное сотрудничество</PageH1Header>
      <section>
        <h2 className="text-xl font-semibold">
          Сведенья о заключенных и планируемых к заключению договорах с иностранными и (или) международными организациями по вопросам образования и науки
        </h2>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >№ п/п</TableHead>
              <TableHead>Государство</TableHead>
              <TableHead>Наименование организации</TableHead>
              <TableHead>Реквизиты договора (наименование, дата, номер, срок действия)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {internationalData.map((item, index) => (
              <TableRow key={index} itemScope itemProp="internationalDog">
                {/* Порядковый номер */}
                <TableCell className="font-medium">
                  {index + 1}
                </TableCell>

                {/* Государство */}
                <TableCell itemProp="stateName">
                  {item.state}
                </TableCell>

                {/* Наименование организации */}
                <TableCell itemProp="orgName">
                  {item.organization}
                </TableCell>

                {/* Реквизиты договора */}
                <TableCell itemProp="dogReg" className="whitespace-pre-line">
                  {item.contractDetails}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
    )
}