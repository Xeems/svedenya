import PageH1Header from "@/components/PageH1Header";
import Link from "next/link";

export default function Page() {
  return (
    <section className='p-4 flex flex-col'>
      <PageH1Header>
        Структура и органы управления образовательной организацией
      </PageH1Header>
      
      <div itemScope itemType="http://schema.org" itemProp="structOrgUprav" className="border-b pb-4">
        
        <h2 itemProp="name" className="text-2xl font-semibold">
          Отдел высшего и дополнительного профессионального образования
        </h2>
        
        <div>
          <strong>Заведующий отделом: </strong>
          <span itemProp="fio">Филимонов Сергей Николаевич</span>
        </div>
        
        <div>
          <strong>Должность руководителя структурного подразделения: </strong>
          <span itemProp="post">
            Главный научный сотрудник, доктор медицинских наук, профессор
          </span>
        </div>

        <div>
          <strong>Адрес местонахождения структурного подразделения: </strong>
          <span itemProp="addressStr">
            654041, Кемеровская область-Кузбасс, г. Новокузнецк, ул. Кутузова, 23
          </span>
        </div>

        <div>
          <strong>Адрес официального сайта: </strong>
          <Link href='https://nii-kpg.ru/' itemProp="site">
            https://nii-kpg.ru/
          </Link>
        </div>
      
        <div>
          <strong>Адрес электронной почты: </strong>
          <span itemProp="email">niikpgpz@mail.ru</span>
        </div>

        <div className="mt-2">
          <strong>Положение о структурном подразделении: </strong>
          <a 
            href="/docs/polozhenie_otdel.pdf" 
            itemProp="divisionClauseDocLink"
            className="text-blue-600 underline"
          >
            Скачать Положение (.pdf)
          </a>
          
        </div>

      </div>
    </section>
  );
}
