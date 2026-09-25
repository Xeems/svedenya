import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const leaders = [
    {
      fio: "Коротенко Ольга Юрьевна",
      post: "ИО директора института",
      telephone: "8(3843)796-979",
      email: "niikpgpz@mail.ru",
      isMainLeader: true
    },
    {
      fio: "Филимонов Егор Сергеевич",
      post: "Заместитель директора по научной работе",
      telephone: "8(3843)796-623",
      email: "filimonov_es@nii-kpg.ru",
    },
    {
      fio: "Корсакова Татьяна Георгиевна",
      post: "Ученый секретарь",
      telephone: "8 (384-3) 796-565",
      email: "korsakovatg@nii-kpg.ru",

    },
  ]

export default function page() {
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header>Руководство</PageH1Header>
      <section className="space-y-8">
        <h2 className="text-xl font-semibold">Информации о руководителе образовательной организации/заместителях руководителя образовательной организации</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ф.И.О.</TableHead>
              <TableHead>Должность</TableHead>
              <TableHead>Контактные телефоны</TableHead>
              <TableHead>Адреса электронной почты</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaders.map((leader, index) => (
              <TableRow 
                key={index} 
                itemScope 
                itemType="http://schema.org" 
                // Динамически выставляем rucovodstvo для директора и rucovodstvoZam для замов
                itemProp={leader.isMainLeader ? "rucovodstvo" : "rucovodstvoZam"}
              >
                <TableCell className="font-medium" itemProp="fio">{leader.fio}</TableCell>
                <TableCell itemProp="post">{leader.post}</TableCell>
                <TableCell itemProp="telephone">{leader.telephone}</TableCell>
                <TableCell itemProp="email">
                  <a 
                    href={`mailto:${leader.email}`} 
                    className="text-blue-600 hover:underline"
                  >
                    {leader.email}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Руководители филиалов */}
      <section>
        <ul itemProp="rucovodstvoFil">
          <li itemProp="nameFil">Филиалы отсутсвуют </li>
          <li itemProp="fio"> - </li>
          <li itemProp="post"> - </li>
          <li itemProp="telephone"> - </li>
          <li itemProp="email"> - </li>
        </ul>
      </section>
    </main>
    )
}