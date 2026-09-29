import PageH1Header from '@/components/PageH1Header';
import commonData from './common.json' 
import SectionParser from '@/components/SectionParser';

export default async function page() {
  return (
    <main className='space-y-8'>
      <PageH1Header>Основные сведения</PageH1Header>
      {commonData.map((section) =>
        <section key={section.sectionId}>
          <h2 className="text-xl font-semibold">{section.name}</h2>
          <SectionParser section={section}/>
        </section>
      )}
    </main>
  )
}
