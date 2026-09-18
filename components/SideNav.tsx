import Link from 'next/link'

type Link = {
    href: string;
    name: string;
};

const navigationLinks: Link[] = [
    { href: 'common', name: 'Основные сведения' },
    { href: 'struct', name: 'Структура и органы управления образовательной организацией' },
    { href: 'document', name: 'Документы' },
    { href: 'education', name: 'Образование' },
    { href: 'managers', name: 'Руководство' },
    { href: 'employees', name: 'Педагогический состав' },
    { href: 'objects', name: 'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда' },
    { href: 'paid_edu', name: 'Платные образовательные услуги' },
    { href: 'budget', name: 'Финансово-хозяйственная деятельность' },
    { href: 'vacant', name: 'Вакантные места для приема (перевода) обучающихся' },
    { href: 'grants', name: 'Стипендии и меры поддержки обучающихся' },
    { href: 'inter', name: 'Международное сотрудничество' },
    { href: 'catering', name: 'Организация питания в образовательной организации' },
    { href: 'eduStandarts', name: 'Образовательные стандарты и требования' }
];

export default function SideNav() {
  return (
    <nav className="flex flex-col max-w-80 m-2 border border-solid">
        {navigationLinks.map((link) => 
            <Link className='hover:text-[#35bc99] font-medium text-lg py-4 px-2 border'
                key={link.href} href={`/sveden/${link.href}`}> {link.name}
            </Link>)}
    </nav>
  )
}
