import { ListSection } from "@/@types/schema";
import ValueReader from "./ValueReader";

interface ListProps {
    list: ListSection
}

export default function List(props: ListProps){
    return( 
        <ul className="space-y-2">
            {props.list.data.map((item) =>
                <li key={item.text}>
                    <ValueReader props={item}/>
                </li>
            )}
        </ul>
    )
}