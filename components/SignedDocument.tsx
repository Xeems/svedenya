import { FileIcon } from "lucide-react"
import Link from "next/link"

type SignedDocumentProps = {
    documentHref: string
    signHref: string
    documentName: string
    itemProp: string
}

export default async function(props : SignedDocumentProps) {
    return <Link 
            className="flex flex-row items-center gap-x-2 text-blue-500" 
            href={props.documentHref}
            itemProp={props.itemProp}>
                <FileIcon/>{props.documentName}    
            </Link>
}