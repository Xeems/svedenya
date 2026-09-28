import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const cateringData = [
    {
      name: "Кафе",
      address: "Кемеровская область-Кузбасс, г. Новокузнецк, ул.Кутузова, дом 23",
      ovz: "??",
    },
  ]

export default async function CateringPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Организация питания в образовательной организации</PageH1Header>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Наименование объекта</TableHead>
            <TableHead>Адрес места нахождения</TableHead>
            <TableHead>Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cateringData.map((item, index) => (
            <TableRow key={index} itemScope itemType="http://schema.org" itemProp="meals">
              {/* Наименование объекта */}
              <TableCell itemProp="objName" className="font-medium">
                {item.name}
              </TableCell>

              {/* Адрес места нахождения */}
              <TableCell itemProp="objAddress">
                {item.address}
              </TableCell>

              {/* Приспособленность для ОВЗ */}
              <TableCell itemProp="objOvz" className="whitespace-pre-line">
                {item.ovz}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <p itemProp="health">Информацию об охране здоровья обучающихся рекомендуется представлять в виде документа или текста </p>
    </main>
    )
}