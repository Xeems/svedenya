import Link from 'next/link'
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem 
} from './ui/sidebar';

type NavigationLink = {
    href: string;
    name: string;
};

const navigationLinks: NavigationLink[] = [
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
    <Sidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel className="text-md text-primary-foreground font-semibold px-4 pt-4">
                  Навигация
                </SidebarGroupLabel>
                <SidebarGroupContent className='px-2'>
                    <SidebarMenu className="gap-1 py-4 px-2">
                        {navigationLinks.map((link) => (
                          <SidebarMenuItem key={link.href} className='transition-all duration-500 ease-in-out'>
                              <SidebarMenuButton asChild className="h-auto py-2.5 px-3 hover:font-semibold hover:text-accent-foreground whitespace-normal align-middle">
                                  <Link 
                                      href={`/${link.href}`}
                                      className="font-medium text-base transition-colors line-clamp-3 block w-full"
                                  > 
                                      {link.name}
                                  </Link>
                              </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  )
}
