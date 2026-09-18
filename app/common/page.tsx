import { Table } from '@/components/Table';
import React from 'react'

const orgData = [
  {
    label: "Полное наименование образовательной (научной) организации",
    value: "Федеральное государственное бюджетное научное учреждение «Научно-исследовательский институт комплексных проблем гигиены и профессиональных заболеваний»",
    itemPropValue: "fullName"
  },
  {
    label: "Сокращенное наименование организации",
    value: "ФГБНУ НИИ КПГПЗ",
    itemPropValue: "shortName"
  },
  {
    label: "Дата создания организации",
    value: "19 апреля 1976 года (в соответствии с решением Президиума Академии медицинских наук СССР)",
    itemPropValue: "regDate"
  },
  {
    label: "Учредитель (учредители) организации",
    value: "Министерство науки и высшего образования Российской Федерации (Минобрнауки России)",
    itemPropValue: "creator"
  },
  {
    label: "Место нахождения организации",
    value: "654041, Российская Федерация, Кемеровская область - Кузбасс, г. Новокузнецк, ул. Кутузова, д. 23",
    itemPropValue: "address"
  },
  {
    label: "Режим и график работы",
    value: (
      <>
        Понедельник – Пятница: с 08:30 до 17:00<br />
        Перерыв на обед: с 12:30 до 13:00<br />
        Суббота, Воскресенье: выходные дни
      </>
    ),
    itemPropValue: "workTime"
  },
  {
    label: "Контактные телефоны",
    value: (
      <>
        Приемная: +7 (3843) 79-65-49<br />
        Факс: +7 (3843) 79-66-73
      </>
    ),
    itemPropValue: "telephone"
  },
  {
    label: "Адрес электронной почты",
    value: (
      <a href="mailto:inst@nii-kpgpz.ru" className="text-blue-600 hover:underline">
        inst@nii-kpgpz.ru
      </a>
    ),
    itemPropValue: "email"
  },
  {
    label: "Адрес официального сайта",
    value: (
      <a href="https://nii-kpg.ru/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        https://nii-kpg.ru/
      </a>
    ),
    itemPropValue: "site"
  },
  {
    label: "Места осуществления образовательной деятельности",
    value: "654041, Российская Федерация, Кемеровская область - Кузбасс, г. Новокузнецк, ул. Кутузова, д. 23 (по месту нахождения института)",
    itemPropValue: "addressEd"
  },
  {
    label: "Филиалы организации",
    value: "Филиалы отсутствуют",
    itemPropValue: "filInfo"
  },
  {
    label: "Представительства организации",
    value: "Представительства отсутствуют",
    itemPropValue: "repInfo"
  }
];

export default function page() {
  return (
      <section className='p-4 flex flex-col gap-8 lg:max-w-2/3'>
        <h1 className='text-4xl font-medium'>Основные сведения</h1>
        <Table data={orgData}/>
      </section>
  )
}
