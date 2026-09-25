import PageH1Header from "@/components/PageH1Header";
import SignedDocument from "@/components/SignedDocument";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Metadata } from "next";

const programsData = [
    {
      level: "Высшее образование — аспирантура",
      code: "3.2.1",
      name: "Гигиена",
      form: "Очная",
      duration: "3 года",
    },
    {
      level: "Высшее образование — аспирантура",
      code: "3.2.4",
      name: "Медицина труда",
      form: "Очная",
      duration: "3 года",
    },
    {
      level: "Высшее образование — аспирантура",
      code: "3.2.3",
      name: "Общественное здоровье, организация и социология здравоохранения",
      form: "Очная",
      duration: "3 года",
    },
    {
      level: "Высшее образование — ординатура",
      code: "31.08.49",
      name: "Терапия",
      form: "Очная",
      duration: "2 года",
    },
    {
      level: "Высшее образование — ординатура",
      code: "31.08.44",
      name: "Профпатология",
      form: "Очная",
      duration: "2 года",
    },
    {
      level: "Высшее образование — ординатура",
      code: "31.08.42",
      name: "Неврология",
      form: "Очная",
      duration: "2 года",
    },
    {
      level: "Высшее образование — ординатура",
      code: "31.08.71",
      name: "Организация здравоохранения и общественное здоровье",
      form: "Очная",
      duration: "2 года",
    },
    {
      level: "Дополнительное профессиональное образование (ДПО)",
      code: "—",
      name: "Повышение квалификации врачей по специальности «Профпатология»",
      form: "Очная / Очно-заочная",
      duration: "от 36 до 144 часов",
    },
  ];


  const educationPrograms = [
    {
      code: "31.08.42",
      name: "неврология",
      level: "Высшее образование - подготовка кадров высшей квалификации",
      profile: "31.08.42 неврология",
      forms: "очная",
      oopUrl: "#",
      planUrl: "#",
      rpdUrl: "#",
      scheduleUrl: "#",
    },
    {
      code: "31.08.44",
      name: "профпатология",
      level: "Высшее образование - подготовка кадров высшей квалификации",
      profile: "31.08.44 профпатология",
      forms: "очная",
      oopUrl: "#",
      planUrl: "#",
      rpdUrl: "#",
      scheduleUrl: "#",
    },
    {
      code: "31.08.49",
      name: "терапия",
      level: "Высшее образование - подготовка кадров высшей квалификации",
      profile: "терапия",
      forms: "очная",
      oopUrl: "#",
      planUrl: "#",
      rpdUrl: "#",
      scheduleUrl: "#",
    },
    {
      code: "32.04",
      name: "Медицина труда",
      level: "Высшее образование - подготовка научно-педагогических кадров",
      profile: "32.04 медицина труда",
      forms: "очная",
      oopUrl: "#",
      planUrl: "#",
      rpdUrl: "#",
      scheduleUrl: "#",
    },
  ]

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
  return (
    <main className="flex flex-col gap-y-8">
      <PageH1Header >Образование</PageH1Header>

      {/* Таблица 3.5.2 – «Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения» */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Код</TableHead>
              <TableHead >Наименование специальности / направления подготовки</TableHead>
              <TableHead >Образовательная программа, направленность, профиль, шифр и наименование научной специальности</TableHead>
              <TableHead>Уровень образования</TableHead>
              <TableHead>Форма обучения</TableHead>
              <TableHead>Нормативный срок обучения</TableHead>
              <TableHead >Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей образовательной программой</TableHead>
              <TableHead >Практики, предусмотренные соответствующей образовательной программой</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody >
            {programsData.map((program, index) => (
              <TableRow key={index} itemProp="eduAccred" >
              <TableCell itemProp="eduCode">{program.code}</TableCell>
              <TableCell itemProp="eduName">{program.name}</TableCell>
              <TableCell itemProp="eduProf">Образовательная программа</TableCell>
              <TableCell itemProp="eduLevel">{program.level}</TableCell>
              <TableCell itemProp="eduForm">{program.form}</TableCell>
              <TableCell itemProp="learningTerm">{program.duration}</TableCell>
              <TableCell itemProp="eduPred">Учебные предметы, курсы, дисциплины</TableCell>
              <TableCell itemProp="eduPrac">Практики</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
          
        {/* Информация о языках, на которых осуществляется образование (обучение), размещенная в виде электронного документа, подписанного электронной подписью */}
        <SignedDocument documentHref="1234.pdf" signHref="1234.sig" itemProp="languageEl" >Документ, содержащий информацию о языках, на которых осуществляется образование (обучение) </SignedDocument>
      </section>  


        <SignedDocument documentHref="123.pdf" itemProp="eduChislenEl" signHref="123.sig">Информация о численности обучающихся по реализуемым образовательным программам за счет бюджетных ассигнований</SignedDocument>
        <SignedDocument documentHref="123.pdf" itemProp="eduPriemEl" signHref="123.sig">Информация о результатах приема</SignedDocument>
        <SignedDocument documentHref="123.pdf" itemProp="eduPerevodEl" signHref="123.sig">Информация о результатах перевода, восстановления и отчисления</SignedDocument>
      
        {/* Информация об образовательной программе, в том числе об адаптированной образовательной программе */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Информация об образовательной программе, в том числе об адаптированной образовательной программе</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead >Код, шифр</TableHead>
                <TableHead>Наименование профессии, специальности, направления подготовки, наименование группы научных специальностей</TableHead>
                <TableHead>Уровень образования</TableHead>
                <TableHead>Образовательные программы, направленность, профиль, шифр и наименование научной специальности </TableHead>
                <TableHead>Реализуемые формы обучения</TableHead>
                <TableHead>Образовательная программа в виде электронного документа</TableHead>
                <TableHead>Учебный план</TableHead>
                <TableHead>Рабочие программы (по каждой дисциплине)</TableHead>
                <TableHead>Календарный учебный график </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {educationPrograms.map((program, index) => (
                <TableRow key={index} itemScope itemType="http://schema.org" itemProp="eduOp">
                  <TableCell className="font-medium" itemProp="eduCode"> {program.code} </TableCell>
                  <TableCell itemProp="eduName">{program.name} </TableCell>
                  <TableCell itemProp="eduLevel">{program.level}</TableCell>
                  <TableCell itemProp="eduProf">{program.profile}</TableCell>
                  <TableCell itemProp="eduForm">{program.forms}</TableCell>
                  <TableCell><a href={program.oopUrl} itemProp="opMain" className="text-blue-600 hover:underline">Открыть ООП</a></TableCell>
                  <TableCell><a href={program.planUrl} itemProp="educationPlan" className="text-blue-600 hover:underline">Скачать план</a></TableCell>
                  <TableCell><a href={program.rpdUrl} itemProp="educationRpd" className="text-blue-600 hover:underline">Перейти к РПД</a></TableCell>
                  <TableCell><a href={program.scheduleUrl} itemProp="educationSchedule" className="text-blue-600 hover:underline">График</a></TableCell>
                  
                  {/* Скрытые обязательные теги для парсера, если они не вынесены в отдельные столбцы */}
                  <td className="hidden">
                    <span itemProp="eduPr">не предусмотрено</span>
                    <span itemProp="methodology">не предусмотрено</span>
                  </td>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        {/* Информация о направлениях и результатах научной */}
        <section className="space-y-4"> 
          <h2 className="text-xl font-semibold">Информация о направлениях и результатах научной (научно-исследовательской) деятельности</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Код, шифр</TableHead>
                <TableHead>Наименование специальности, направления подготовки, наименование группы научных специальностей</TableHead>
                <TableHead>Перечень научных направлений, в рамках которых ведется научная (научно-исследовательская) деятельность</TableHead>
                <TableHead>Образовательная программа, направленность, профиль, шифр и наименование научной специальности</TableHead>
                <TableHead>Уровень образования</TableHead>
                <TableHead>Название научного направления/научной школы</TableHead>
                <TableHead>Результаты научной (научно-исследовательской) деятельности</TableHead>
                <TableHead>Сведения о научно-исследовательской базе для осуществления научной (научно-исследовательской) деятельности</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nirData.map((item, index) => (
                <TableRow key={index} itemScope itemType="http://schema.org" itemProp="eduNir">
                  <TableCell className="font-medium" itemProp="eduCode"> {item.code}</TableCell>
                  <TableCell itemProp="eduName">{item.name}</TableCell>
                  <TableCell itemProp="perechenNir">{item.perechen}</TableCell>
                  <TableCell itemProp="eduProf">{item.profile}</TableCell>
                  <TableCell itemProp="eduLevel">{item.level}</TableCell>
                  <TableCell itemProp="napravNir">{item.naprav}</TableCell>
                  <TableCell itemProp="resultNir">{item.result}</TableCell>
                  <TableCell itemProp="baseNir">{item.base}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table> 
        </section>

        {/* 3.5.8 информация о трудоустройстве выпускников */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Информация о трудоустройстве выпускников образовательных организаций за прошлый учебный год</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Код, шифр</TableHead>
                <TableHead>Наименование профессии, специальности, направления подготовки наименование группы научных специальностей</TableHead>
                <TableHead>Образовательная программа, направленность, профиль, шифр и наименование научной специальности</TableHead>
                <TableHead>Количество выпускников</TableHead>
                <TableHead>Количество трудоустроенных выпускников</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {graduateData.map((item, index) => (
                <TableRow key={index} itemScope itemType="http://schema.org" itemProp="graduateJob">
                  <TableCell className="font-medium" itemProp="eduCode">{item.code}</TableCell>
                  <TableCell itemProp="eduName">{item.name}</TableCell>
                  <TableCell itemProp="eduProf">{item.profile}</TableCell>
                  <TableCell itemProp="v1">{item.graduatesCount}</TableCell>
                  <TableCell itemProp="t1">{item.employedCount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </section>

        <SignedDocument itemProp="accreditationDocLink" signHref="123" documentHref="213">Информация о наличии государственной окредитации (Выписокй «Реестр организаций, осуществляющих образовательную деятельность по имеющим государственную аккредитацию образовательным программам»)</SignedDocument>
     
    </main>
  )
}