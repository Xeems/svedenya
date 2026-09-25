import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const staffData = [
    {
      fio: "Филимонов С.Н.",
      post: "Начальник отдела",
      disciplines: "—",
      level: "—",
      degree: "Д.М.Н.",
      academStat: "Профессор",
      qualification: "терапия 423104/4245532 от 05.02.2025\n\nпрофпатология 423104/425045 от 11.10.2025",
      profDevelopment: "—",
      specExperience: "41 г 7 мес",
      teachingOp: "—",
    },
    {
      fio: "Мартынов И.Д.",
      post: "Заведующий лабораторией",
      disciplines: "неврология",
      level: "—",
      degree: "К.М.Н.",
      academStat: "—",
      qualification: "функциональная диагностика 160020561 от 24.03.2025\n\nневрология 423104/424819 от 15.02.2025",
      profDevelopment: "—",
      specExperience: "18 л 1 мес",
      teachingOp: "неврология",
    },
    {
      fio: "Панев Н.И.",
      post: "Заведующий лабораторией",
      disciplines: "профпатология",
      level: "—",
      degree: "Д.М.Н.",
      academStat: "—",
      qualification: "терапия 423104/424527 от 05.02.2025",
      profDevelopment: "пульмонология ПП/927310 от 22.03.2007",
      specExperience: "40 л",
      teachingOp: "профпатология",
    },
    {
      fio: "Филимонов Е.С.",
      post: "Заместитель директора по научной работе",
      disciplines: "терапия",
      level: "—",
      degree: "К.М.Н.",
      academStat: "—",
      qualification: "—",
      profDevelopment: "профпатология 180000/300644 от 15.06.2019\n\nфизическая и реабилитационная медицина 6627/00002332 от 05.03.2020",
      specExperience: "14 лет",
      teachingOp: "Терапия, кардиология",
    },
  ]


export default function page() {
  return (
    <main className="space-y-8">
      <PageH1Header>Педагогческий состав</PageH1Header>
      <section>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ФИО</TableHead>
              <TableHead>Должность преподавателя</TableHead>
              <TableHead>Преподаваемые учебные предметы, курсы, дисциплины (модули)</TableHead>
              <TableHead>Уровень (уровни) профессионального образования, квалификация</TableHead>
              <TableHead>Ученая степень (при наличии)</TableHead>
              <TableHead>Ученое звание (при наличии)</TableHead>
              <TableHead>Сведения о повышении квалификации (за последние 3 года)</TableHead>
              <TableHead>Сведения о профессиональной переподготовке (при наличии)</TableHead>
              <TableHead>Сведения о продолжительности опыта (лет) работы в профессиональной сфере</TableHead>
              <TableHead>Наименование образовательных программ, в реализации которых участвует педагогический работник</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffData.map((employee, index) => (
              <TableRow key={index} itemScope itemType="http://schema.org" itemProp="teachingStaff">
                <TableCell  itemProp="fio">{employee.fio}</TableCell>
                <TableCell itemProp="post">{employee.post}</TableCell>
                <TableCell itemProp="teachingDiscipline">{employee.disciplines}</TableCell>
                <TableCell itemProp="teachingLevel">{employee.level}</TableCell>
                <TableCell itemProp="degree">{employee.degree}</TableCell>
                <TableCell itemProp="academStat">{employee.academStat}</TableCell>
                <TableCell itemProp="qualification" >{employee.qualification}</TableCell>
                <TableCell itemProp="profDevelopment" >{employee.profDevelopment}</TableCell>
                <TableCell itemProp="specExperience">{employee.specExperience}</TableCell>
                <TableCell itemProp="teachingOp">{employee.teachingOp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
    )
}