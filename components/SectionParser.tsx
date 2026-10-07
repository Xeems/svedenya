import { SectionSchema } from "@/@types/schema";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";
import List from "./List";
import SignedDocument from "./SignedDocument";
import { cn } from "cn";


export default function SectionParser ({ section }: { section: SectionSchema }) {
    switch(section.type){
        case 'verticalTable':{
            return (
            <section className={cn('space-y-4', section.hidden && 'hidden')}>
                {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
                <VerticalTable table={section}/>
            </section>)
        }
        case 'horizontalTable':{
            return (
            <section className={cn('space-y-4', section.hidden && 'hidden')}>
                {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
                <HorizontalTable table={section}/>
            </section>)
        }
        case 'list' :{
            return (
            <section className={cn('space-y-4', section.hidden && 'hidden')}>
                {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
                <List list={section}/>
            </section>)
        }
        case "signedDocument":{
            return (
            <section className={cn('space-y-4', section.hidden && 'hidden')}>
                {section.name && <h2 className="text-xl font-semibold">{section.name}</h2>}
                <SignedDocument props={section} />
            </section>)
        }
    }
}