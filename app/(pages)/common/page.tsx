import PageH1Header from '@/components/PageH1Header';
import SectionParser from '@/components/SectionParser';
import { getPageJson } from '@/lib/getPageJson';

export const dynamic = 'force-static'; 

export default async function CommonPage() {
  const data = await getPageJson('common')
  return (
    <main className='space-y-8'>
      <PageH1Header>Основные сведения</PageH1Header>
      {data && data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
  )
}
