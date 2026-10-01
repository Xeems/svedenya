import { SectionSchema } from "@/@types/schema";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";
import List from "./List";
import SignedDocument from "./SignedDocument";


export default async function SectionParser ({ section }: { section: SectionSchema }) {
    switch(section.type){
        case 'verticalTable':{
            return (<VerticalTable table={section}/>)
        }
        case 'horizontalTable':{
            return <HorizontalTable table={section}/>
        }
        case 'list' :{
            return <List list={section}/>
        }
        case "signedDocument":{
            return <SignedDocument itemProp={section.itemProp} href={section.href} text={section.text} signHref={section.signHref} type={section.type}/>
        }
    }
}