import { SectionSchema } from "@/@types/schema";
import VerticalTable from "./VerticalTable";


export default async function SectionParser ({ section }: { section: SectionSchema }) {
    switch(section.type){
        case 'verticalTable':{
            return (<VerticalTable table={section}/>)
        }
    }
}