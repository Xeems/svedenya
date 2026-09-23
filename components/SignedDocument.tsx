import { AwardIcon, FileIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

type SignedDocumentProps = {
    documentHref: string
    signHref?: string
    documentName?: string
    itemProp: string
    children: React.ReactNode
}

export default async function(props : SignedDocumentProps) {
    return( 
    <span className="flex flx-row gap-x-4">
        <Link 
            className="flex flex-row items-center gap-x-2 text-blue-500 hover:text-blue-600" 
            href={props.documentHref}
            itemProp={props.itemProp}>
                <FileIcon />
                {props.documentName}
                {props.children}    
        </Link>
        {props.signHref &&
            <Link href={props.signHref}>
                <AwardIcon className="text-green-600"/>
            </Link>
        }
    </span>
    )
}