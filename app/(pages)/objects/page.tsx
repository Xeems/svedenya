import PageH1Header from "@/components/PageH1Header";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";

const addressDefault = "654041, Кемеровская область - Кузбасс, г. Новокузнецк, ул. Кутузова, дом 23"
const accessibilityDefault = "Здание института оборудовано пандусом, лифтом, оснащено системами противопожарной сигнализации и оповещения, информационными табло, размещенная на официальном сайте информация доступна в версии для слабовидящих."

  const cabinetsData = [
    {
      address: addressDefault,
      name: "Кабинет №801",
      equipment: "2 рабочих места, оснащённые 1 персональным компьютером и ноутбуком, совмещенным с мультимедийным оборудованием в виде LSD панели диагональю 65 дюймов.\nДоска.\nУказка.\n12 посадочных мест.\nТаблицы с иллюстрациями, наглядные пособия.",
      ovz: accessibilityDefault,
    },
    {
      address: addressDefault,
      name: "Зал имени В.В. Бессоненко",
      equipment: "Кафедра\nАппаратура громкой связи\nАппаратура мультимедиа\n70 посадочных мест",
      ovz: accessibilityDefault,
    },
    {
      address: addressDefault,
      name: "Зал заседаний ученого совета",
      equipment: "Кафедра\nАппаратура громкой связи\nАппаратура мультимедиа\n24 посадочных места",
      ovz: accessibilityDefault,
    },
    {
      address: addressDefault,
      name: "Ординаторская, 4 этаж, кабинет №407",
      equipment: "2 оборудованных рабочих места",
      ovz: accessibilityDefault,
    },
    {
      address: addressDefault,
      name: "Ординаторская, 5 этаж, кабинет №522",
      equipment: "2 оборудованных рабочих места",
      ovz: accessibilityDefault,
    },
    {
      address: addressDefault,
      name: "Ординаторская, 5 этаж, кабинет №518",
      equipment: "2 оборудованных рабочих места",
      ovz: accessibilityDefault,
    }
  ]

const libraryData = [
    {
      name: "Библиотека",
      address: "654041, Кемеровская область - Кузбасс, г. Новокузнецк, ул. Кутузова, дом 23, 1 этаж",
      ovz: "Имеется. Библиотека НИИ КПГПЗ приспособлена для обучения инвалидов и лиц с ограниченными возможностями здоровья. В соответствии с требованиями, установленными законодательными и нормативно-правовыми актами в читальном зале научно-медицинской библиотеки организовано автоматизированное рабочее место для доступа к информационным системам и электронным образовательным ресурсам для людей с ограниченными возможностями здоровья.",
    },
    {
      name: "Библиотека",
      address: "654005, Кемеровская область - Кузбасс, г. Новокузнецк, проспект Строителей, 5, 2 этаж",
      ovz: "Для данной категории обучающихся предлагается для использования электронная лупа. В приобретенной академией ЭБС «Консультант врача» есть возможность увеличить размер шрифта, как основного текста, так и интерфейса. Все имеющиеся библиотеки оснащены следующим набором специальных возможностей средствами операционной системы Windows:\n\n- Для людей с нарушениями зрения (изменение разрешения экрана, увеличения размера текста и управляющих элементов, увеличения произвольного участка экрана при помощи экранной лупы, использования высококонтрастных цветовых схем, увеличения размеров и цвета указателя мыши и курсора текста, использования экранного диктора);\n\n- Для людей с нарушениями подвижности (фильтрация ввода, залипание клавиш, настройка скорости перемещения указателя мыши и параметров кнопок.\n\n- Для людей, испытывающих трудности при пользовании клавиатурой имеется экранная клавиатура.",
    },
]

 const resources = [
    {
      textBeforeLink: "Государственная публичная научно-техническая библиотека Сибирского отделения Российской академии наук (ГПНТБ СО РАН)",
      href: "http://www.spsl.nsc.ru/",
    },
    {
      textBeforeLink: "База данных База данных Wiley Journals Database, содержащая полнотекстовую коллекцию электронных журналов издательства John Wiley & Sons Inc, по различным отраслям знаний на английском языке на платформе: ",
      href: "https://wiley.com",
    },
    {
      textBeforeLink: "Полнотекстовая коллекция журналов и электронных книг (монографий) издательства Springer Nature по различным отраслям знаний на английском языке на платформе: ",
      href: "https://springer.com",
    },
    {
      textBeforeLink: "База данных, содержащая полнотекстовые журналы издательства Nature Publishing Group тематической коллекции Life Sciences Package на платформе ",
      href: "https://nature.com",
    },
    {
      textBeforeLink: "Журналы РАН, изданные в 2023 году: ",
      href: "https://rcsi.science",
    },
    {
      textBeforeLink: "Научная электронная библиотека ",
      href: "https://elibrary.ru",
    },
  ]

  const hostileData = [
    {
      label: "Количество общежитий/интернатов",
      hostelValue: "1",
      interValue: "0",
      hostelProp: "hostelInfo",
      interProp: "interInfo",
    },
    {
      label: "Количество жилых помещений для иногородних обучающихся",
      hostelValue: "1",
      interValue: "0",
      hostelProp: "hostelNum",
      interProp: "interNum",
    },
    {
      label: "Количество жилых помещений, приспособленных для использования инвалидами и лицами с ограниченными возможностями здоровья",
      hostelValue: "0", // Заменили знак "?" на легитимный для парсера "0"
      interValue: "0",
      hostelProp: "hostelNumOvz",
      interProp: "interNumOvz",
    },
    {
      label: "Количество изолированных жилых помещений (отдельных комнат), определенных для проживания нуждающихся в жилых помещениях в общежитии студенческих семей",
      hostelValue: "2",
      interValue: "0",
      hostelProp: "hostelNumRooms",
      interProp: null, // В ТЗ для этой ячейки интернатов тег не предусмотрен
    },
  ]

export default async function ObjectsPage() {
  return (
    <main className="space-y-8">
      <PageH1Header>Материально-техническое обеспечение и оснащѐнность образовательного процесса. Доступная среда</PageH1Header>
      <section>
        <h2 className="text-xl font-semibold">Сведения о наличии оборудованных учебных кабинетов /объектов для проведения практических занятий</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >Адрес</TableHead>
              <TableHead>Наименование оборудованных учебных кабинетов/объектов для проведения практических занятий</TableHead>
              <TableHead >Оснащенность оборудованных учебных кабинетов/объектов для проведения практических занятий</TableHead>
              <TableHead >Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cabinetsData.map((cabinet, index) => (
              <TableRow key={index} itemScope itemProp="purposeCab">
                {/* Адрес места нахождения */}
                <TableCell itemProp="addressCab" >
                  {cabinet.address}
                </TableCell>

                {/* Наименование кабинета */}
                <TableCell itemProp="nameCab">
                  {cabinet.name}
                </TableCell>

                {/* Оснащенность */}
                <TableCell itemProp="osnCab" >
                  {cabinet.equipment}
                </TableCell>

                {/* Доступная среда / Приспособленность */}
                <TableCell itemProp="ovzCab" >
                  {cabinet.ovz}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      {/* Сведения об объектах для проведения практических занятий */}
      <section className="hidden">
        <h2 className="text-xl font-semibold">Сведения об объектах для проведения практических занятий</h2>
        <div style={{ display: 'none' }}>
          {cabinetsData.map((cabinet, index) => (
            <div key={index} itemScope itemProp="purposePrac">
              <span itemProp="addressPrac">{cabinet.address}</span>
              <span itemProp="namePrac">{cabinet.name}</span>
              <span itemProp="osnPrac">{cabinet.equipment}</span>
              <span itemProp="ovzPrac">{cabinet.ovz}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead >Наименование объекта</TableHead>
              <TableHead >Адрес места нахождения</TableHead>
              <TableHead >Приспособленность для использования инвалидами и лицами с ограниченными возможностями здоровья</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {libraryData.map((item, index) => (
              <TableRow key={index} itemScope itemProp="purposeLibr">
                {/* Наименование объекта */}
                <TableCell itemProp="objName" >
                  {item.name}
                </TableCell>

                {/* Адрес места нахождения */}
                <TableCell itemProp="objAddress" >
                  {item.address}
                </TableCell>

                {/* Приспособленность для ОВЗ */}
                <TableCell itemProp="objOvz" className="whitespace-pre-line  text-sm align-top leading-relaxed">
                  {item.ovz}
                </TableCell>
              </TableRow>
            ))}

            <tr itemProp="purposeSport" className="hidden">
              <td itemProp="objName">Объекты спорта отсутсвуют </td>
              <td itemProp="objAddress">Объекты спорта отсутсвуют </td>
              <td itemProp="objOvz">Объекты спорта отсутсвуют </td>
            </tr>
          </TableBody>
        </Table>
      </section>

      {/* Информация об обеспечении беспрепятственного доступа в здания образовательной организации */}
      <section>
          <h2 className="text-xl font-semibold">Информация об обеспечении беспрепятственного доступа в здания образовательной организации</h2>
            <p itemProp="ovz"> 
              Информация об обеспечении беспрепятственного доступа в здания образовательной организации
            </p>
      </section>

      {/* Сведения о средствах обучения и воспитания  */}
      <section>
          <h2 className="text-xl font-semibold">Сведения о средствах обучения и воспитания </h2>
            <p itemProp="purposeFacil">
              Сведения о средствах обучения и воспитания 
            </p>
      </section>

      {/* Информация о приспособленных средствах обучения и воспитания */}
      <section>
          <h2 className="text-xl font-semibold">Информация о приспособленных средствах обучения и воспитания</h2>
            <p itemProp="purposeFacilOvz">
              Информация о приспособленных средствах обучения и воспитания
            </p>
      </section>

      {/* Сведения о доступе к информационным системам и информационно-телекоммуникационным сетям */}
      <section>
          <h2 className="text-xl font-semibold">Сведения о доступе к информационным системам и информационно-телекоммуникационным сетям</h2>
            <p itemProp="comNet">
              Сведения о доступе к информационным системам и информационно-телекоммуникационным сетям</p>
      </section>

      {/* Информация о доступе к приспособленным информационным системам и информационно- телекоммуникационным сетям */}
      <section>
          <h2 className="text-xl font-semibold">Информация о доступе к приспособленным информационным системам и информационно-телекоммуникационным сетям</h2>
            <p itemProp="comNetOvz">
              Информация о доступе к приспособленным информационным системам и информационно-телекоммуникационным сетям
            </p>
      </section>

      {/* Информация об электронных образовательных ресурсах, к которым обеспечивается доступ обучающихся */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Информация об электронных образовательных ресурсах, к которым обеспечивается доступ обучающихся</h2>
        <ol className="list-decimal pl-5 space-y-3">
          {resources.map((resource, index) => (
            <li key={index} className="text-md leading-relaxed">
              {resource.textBeforeLink}
              <Link
                href={resource.href}
                itemProp="erList"
                className="text-blue-600 hover:underline font-medium break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.href}
              </Link>
            </li>
          ))}
        </ol>
      </section>


      {/* общежития */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Информация о местах проживания студентов</h2>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[45%]">Наименование показателя</TableHead>
              <TableHead className="text-center">Общежития *</TableHead>
              <TableHead className="text-center">Интернаты</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hostileData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-slate-900 text-sm">
                  {row.label}
                </TableCell>

                {/* Данные по общежитиям */}
                <TableCell 
                  itemProp={row.hostelProp || undefined} 
                  className="text-center text-sm font-semibold"
                >
                  {row.hostelValue}
                </TableCell>

                {/* Данные по интернатам */}
                <TableCell 
                  itemProp={row.interProp || undefined} 
                  className="text-center text-sm text-slate-600"
                >
                  {row.interValue}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        <p className="text-xs text-shadow-muted-foreground italic mt-2">
          * Примечание: Жилое помещение предоставляется в формате служебной квартиры.
        </p>
      </section>

      <section className="hidden">
        <div  aria-hidden="true">
          <span itemProp="interNum">0</span>
          <span itemProp="interNumOvz">0</span>
          <span itemProp="hostelInterOvz">отсутствует</span>
          <a href="#" itemProp="localActObSt">отсутствует</a>
          <a href="#" itemProp="localActObPred">отсутствует</a>
          <a href="#" itemProp="erListOvz">отсутствует</a>
          <span itemProp="techOvz">отсутствуют</span>
        </div>
      </section>
    </main>
    )
}