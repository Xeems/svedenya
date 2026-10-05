import PageH1Header from '@/components/PageH1Header';
import commonData from './common.json' 
import SectionParser from '@/components/SectionParser';
import { SectionSchema } from '@/@types/schema';

export default async function page() {
  const data = commonData as SectionSchema[]
  return (
    <main className='space-y-8'>
      <PageH1Header>Основные сведения</PageH1Header>
      {data.map((section) =>( <SectionParser section={section} key={section.sectionId}/> ))}
    </main>
  )
}
