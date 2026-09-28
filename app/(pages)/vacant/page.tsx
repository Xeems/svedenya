import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

  const vacantData = [
    {
      code: "-",
      name: "-",
      level: "-",
      profile: "-",
      course: "-",
      form: "-",
      numberBFVacant: "0", // ст. 7: федеральный бюджет
      numberBRVacant: "0", // ст. 8: бюджет субъектов РФ
      numberBMVacant: "0", // ст. 9: местный бюджет
      numberPVacant: "0",  // ст. 10: по договорам (платные)
    },
  ]

export default function VacantPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Вакантные места для перевода обучающихся</PageH1Header>
      <section>
        <h2></h2>
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow>
              <TableHead>Код, шифр</TableHead>
              <TableHead>Наименование профессии, специальности, направления подготовки, научной специальности</TableHead>
              <TableHead>Уровень образования</TableHead>
              <TableHead>Образовательная программа, направленность, профиль, шифр и наименование научной специальности</TableHead>
              <TableHead>Курс</TableHead>
              <TableHead>Форма обучения</TableHead>
              <TableHead>Количество вакантных мест для приема (перевода) на места, финансируемые за счет бюджетных ассигнований федерального бюджета</TableHead>
              <TableHead>Количество вакантных мест для приема (перевода) на места, финансируемые за счет бюджетов субъектов Российской Федерации</TableHead>
              <TableHead>Количество вакантных мест для приема (перевода) на места, финансируемые за счет местных бюджетов</TableHead>
              <TableHead>Количество вакантных мест для приема (перевода) за счет средств физических и (или) юридических лиц</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {vacantData.map((item, index) => (
              <TableRow key={index} itemScope itemProp="vacant">
                {/* Код, шифр */}
                <TableCell  itemProp="eduCode">
                  {item.code}
                </TableCell>

                {/* Наименование */}
                <TableCell  itemProp="eduName">
                  {item.name}
                </TableCell>

                {/* Уровень образования */}
                <TableCell  itemProp="eduLevel">
                  {item.level}
                </TableCell>

                {/* Профиль */}
                <TableCell itemProp="eduProf">
                  {item.profile}
                </TableCell>

                {/* Курс */}
                <TableCell itemProp="eduCourse">
                  {item.course}
                </TableCell>

                {/* Форма обучения */}
                <TableCell itemProp="eduForm">
                  {item.form}
                </TableCell>

                {/* Вакантные места: Федеральный бюджет */}
                <TableCell  itemProp="numberBFVacant">
                  {item.numberBFVacant}
                </TableCell>

                {/* Вакантные места: Региональный бюджет */}
                <TableCell  itemProp="numberBRVacant">
                 {item.numberBRVacant}
                </TableCell>

                {/* Вакантные места: Местный бюджет */}
                <TableCell itemProp="numberBMVacant">
                  {item.numberBMVacant}
                </TableCell>

                {/* Вакантные места: Платные договоры */}
                <TableCell  itemProp="numberPVacant">
                  {item.numberPVacant}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
      <span>В НИИ КПГПЗ на данный момент вакантных мест для приѐма (перевода) обучающихся нет.</span>
    </main>
    )
}