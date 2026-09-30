import { SectionSchema } from "@/@types/schema";
import VerticalTable from "./VerticalTable";
import HorizontalTable from "./HorizontalTable";


export default async function SectionParser ({ section }: { section: SectionSchema }) {
    switch(section.type){
        case 'verticalTable':{
            return (<VerticalTable table={section}/>)
        }
        case 'horizontalTable':{
            return <HorizontalTable table={section}/>
        }
    }
}