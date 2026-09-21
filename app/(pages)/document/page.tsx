import PageH1Header from "@/components/PageH1Header";
import Link from "next/link";

export default function page() {
  return (
    <section>
      <PageH1Header>Документы</PageH1Header>
      <div className=" flex flex-col gap-y-2">
        <Link itemProp="ustavDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Устав организации</Link>
        <Link itemProp="localActStud" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Правила внутреннего распорядка обучающихся</Link>
        <Link itemProp="localActOrder" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Правила внутреннего трудового распорядка </Link>
        <Link itemProp="localActCollec" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Коллективный договор (при наличии) </Link>
        <Link itemProp="reportEduDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Отчѐт о результатах самообследования</Link>
        <Link itemProp="prescriptionDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Предписания органов, осуществляющих государственный контроль (надзор) в сфере образования, копии отчетов об исполнении таких предписаний</Link>
        <Link itemProp="priemDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Правила приема обучающихся</Link>
        <Link itemProp="modeDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Режим занятий обучающихся</Link>
        <Link itemProp="tekKontrolDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся</Link>
    
        <Link itemProp="perevodDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Порядок и основания перевода, отчисления и восстановления обучающихся</Link>
        <Link itemProp="vozDocLink" href={'https://nii-kpg.ru/'} className="text-primary-foreground">Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся</Link>
    
      </div>
    </section>
    )
}