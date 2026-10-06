import { SignedDocValue } from "@/@types/schema"
import { cn } from "cn"
import { AwardIcon, FileIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export default async function SignedDocument({ props }: { props: SignedDocValue }) {
    return (
        <span className={cn("flex flex-row items-center w-fit gap-x-4", props.hidden && "hidden")}>
            <Link
                className="flex flex-row items-center gap-x-2 text-blue-500 hover:text-blue-600"
                href={props.href}
                itemProp={props.itemProp}>
                <FileIcon className="size-6 shrink-0" />
                {/* {props.documentName} */}
                {props.text}
            </Link>
            {(props.signHref && props.signInfo)   &&
                <Link href={props.signHref} itemProp={props.itemProp} className="group relative inline-block">

                    {/* ТУЛТИП (Внутри родителя .group, чтобы работал селектор group-hover) */}
                    {/* Заменили left-1/2 на right-0, чтобы окно открывалось влево и не резалось экраном */}
                    <SigTooltip signInfo={props.signInfo} />


                    <AwardIcon className="text-green-600 size-6 shrink-0" />
                </Link>
            }
        </span>
    )
}


async function SigTooltip({ signInfo }: {
    signInfo: {
        owner: string
        dateSigning: string
        issuer: string
        hash: string
    }
}) {
    return (
        <div className="absolute bottom-full right-0 mb-2 w-80 p-3 bg-background rounded shadow-xl border hidden group-hover:block z-50 text-xs text-left">
            <p className="font-bold border-b pb-1 mb-2 flex items-center gap-x-1">
                <span>Электронный документ подписан ЭП</span>
            </p>
            <div className="space-y-1 text-secondary-foreground">
                <p><strong>Владелец:</strong> {signInfo.owner}</p>
                <p><strong>Должность владельца:</strong> {signInfo.issuer}</p>
                <p><strong>Дата подписания</strong> {signInfo.dateSigning}</p>
                <p className="text-[10px] text-muted-foreground break-all">
                    <strong>Ключ документа (хэш):</strong> <br /><code className="bg-slate-100 p-0.5 rounded">{signInfo.hash}</code>
                </p>
            </div>
        </div>
    )
}
