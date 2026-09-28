import PageH1Header from "@/components/PageH1Header";
import SignedDocument from "@/components/SignedDocument";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

  // Данные таблицы 3.12.2 (Объем образовательной деятельности за 2025 год)
  const volumeData = [{
    year: 2025,
    federal: "2020.0",
    regional: "0",
    local: "0",
    contract: "0",
  },
  {
    year: 2026,
    federal: "2999.8",
    regional: "0",
    local: "0",
    contract: "0",
  }
]

  // Данные таблицы 3.12.3 (Поступления и расходы)
  const financialReports = [
    {
      year: "2025",
      income: "—", // На скрине пустая ячейка / не указано
      expenses: "—",
    },
  ]

export default async function BudgetPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Финансово-хозяйственная деятельность</PageH1Header>
      <section className="space-y-4">
      <h2 className="text-xl font-semibold"> Объем образовательной деятельности, финансовое обеспечение которой осуществляется:</h2>
          <Table>
            <TableHeader className="bg-slate-50">
              <TableRow>
                <TableHead className="text-center font-medium">Год</TableHead>
                <TableHead className="text-center font-medium">за счет бюджетных ассигнований федерального бюджета (тыс. руб.)</TableHead>
                <TableHead className="text-center font-medium">за счет бюджетов субъектов Российской Федерации (тыс. руб.)</TableHead>
                <TableHead className="text-center font-medium">за счет местных бюджетов (тыс. руб.)</TableHead>
                <TableHead className="text-center font-medium">по договорам об оказании платных образовательных услуг (тыс. руб.)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {volumeData.map((year) =>
              <TableRow>
                <TableCell className="text-center font-semibold">{year.year}</TableCell>
                <TableCell className="text-center font-mono" itemProp="finBFVolume">
                  {year.federal}
                </TableCell>
                <TableCell className="text-center font-mono" itemProp="finBRVolume">
                  {year.regional}
                </TableCell>
                <TableCell className="text-center font-mono" itemProp="finBMVolume">
                  {year.local}
                </TableCell>
                <TableCell className="text-center font-mono" itemProp="finPVolume">
                  {year.contract}
                </TableCell>
              </TableRow>
              )}
              
            </TableBody>
          </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Сведения о поступлении финансовых и материальных средств и об их расходах
        </h2>
        <Table>
          <TableHeader >
            <TableRow>
              <TableHead >Год</TableHead>
              <TableHead >Поступившие финансовые и материальные средства</TableHead>
              <TableHead>Расходованные финансовые и материальные средства</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {financialReports.map((report, index) => (
              <TableRow key={index} itemScope  itemProp="volume">
                <TableCell className="text-center font-semibold" itemProp="finYear">
                  {report.year}
                </TableCell>  
                <TableCell className="text-center font-mono" itemProp="finPost">
                  {report.income}
                </TableCell>        
                <TableCell className="text-center font-mono" itemProp="finRas">
                  {report.expenses}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          План финансово-хозяйственной деятельности образовательной организации, утвержденный в установленном законодательством Российской Федерации порядке, или бюджетная смета образовательной организации
        </h2>
        <SignedDocument documentHref="321" itemProp="finPlanDocLink" signHref="321">План финансово-хозяйственной деятельности образовательной организации</SignedDocument>
      </section>
      
      <section>
        {/* Дополнительное требование (ссылка на bus.gov.ru для гос. учреждений) */}
        <p className="text-xs text-muted-foreground leading-relaxed border-t pt-2 mt-2">
          Ссылка на информацию, размещаемую на официальном сайте в сети «Интернет» в соответствии с Федеральным законом № 83-ФЗ:{" "}
          <a 
            href="https://bus.gov.ru/info-card/337328" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline break-all font-medium"
          >
            https://bus.gov.ru/info-card/337328
          </a>
        </p>
      </section>
    </main>
  )    
}
