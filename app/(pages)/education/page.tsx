import PageH1Header from "@/components/PageH1Header";
import SignedDocument from "@/components/SignedDocument";
import Link from "next/link";

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


// 3.5.4 
const admissionResults = [
  {
    code: "3.2.4",
    name: "Медицина труда",
    level: "Подготовка научно-педагогических кадров в аспирантуре",
    form: "очная",
    federalBudget: 3,
    regionalBudget: 0,
    localBudget: 0,
    paidContracts: 0,
    averageScore: 15,
  },
  {
    code: "31.08.42",
    name: "Неврология",
    level: "Ординатура",
    form: "очная",
    federalBudget: 4,
    regionalBudget: 0,
    localBudget: 0,
    paidContracts: 0,
    averageScore: 137,
  },
  {
    code: "31.08.44",
    name: "Профпатология",
    level: "Ординатура",
    form: "очная",
    federalBudget: 1,
    regionalBudget: 0,
    localBudget: 0,
    paidContracts: 0,
    averageScore: 106,
  },
  {
    code: "31.08.49",
    name: "Терапия",
    level: "Ординатура",
    form: "очная",
    federalBudget: 1,
    regionalBudget: 0,
    localBudget: 0,
    paidContracts: 0,
    averageScore: 136,
  },
]

export default function page() {
  return (
    <section>
      <PageH1Header >Образование</PageH1Header>

      <div className="flex flex-col gap-2 bg-muted/20 ">
       <h2 className="text-xl font-semibold">Информация о реализуемых уровнях образования, о формах обучения, нормативных сроках обучения</h2>
        <table className="w-full text-left border-collapse bg-white text-xs md:text-sm">
          <thead>
            <tr className="bg-blue-800 text-white font-semibold">
              <th className="p-3 border border-blue-700 w-24">Код</th>
              <th className="p-3 border border-blue-700">Наименование специальности / направления подготовки</th>
              <th className="p-3 border border-blue-700">Образовательная программа, направленность, профиль, шифр и наименование научной специальности</th>
              <th className="p-3 border border-blue-700">Уровень образования</th>
              <th className="p-3 border border-blue-700 w-32">Форма обучения</th>
              <th className="p-3 border border-blue-700 w-40">Нормативный срок обучения</th>
              <th className="p-3 border border-blue-700 w-40">Учебные предметы, курсы, дисциплины (модули), предусмотренные соответствующей образовательной программой</th>
              <th className="p-3 border border-blue-700 w-40">Практики, предусмотренные соответствующей образовательной программой</th>
            
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-gray-700">
            {programsData.map((program, index) => (
              <tr key={index} className="hover:bg-blue-50/50 transition-colors" itemProp="eduAccred">
                <td className="p-3 font-mono text-gray-600" itemProp="eduCode">{program.code}</td>
                <td className="p-3 font-medium text-blue-950" itemProp="eduName">{program.name}</td>
                <td className="p-3 font-medium text-blue-950" itemProp="eduProf">Образовательная программа</td>
                <td className="p-3 font-medium text-gray-900 bg-gray-50/50" itemProp="eduLevel">{program.level}</td>
                <td className="p-3 text-gray-600" itemProp="eduForm">{program.form}</td>
                <td className="p-3 text-gray-900 font-medium" itemProp="learningTerm">{program.duration}</td>
                <td className="p-3 text-gray-600" itemProp="eduPred">Учебные предметы, курсы, дисциплины</td>
                <td className="p-3 text-gray-900 font-medium" itemProp="eduPrac">Практики</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link href="ссылка на документ" itemProp="languageEl"> Документ, содержащий информацию о языках, на которых осуществляется образование (обучение) </Link>
            
      <SignedDocument documentHref="123.pdf" itemProp="eduPriemEl" signHref="123.sig" documentName="Информация о результатах приема"/>
      </div>
    </section>
    )
}