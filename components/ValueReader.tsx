import { PolymorphicValue } from "@/@types/schema";
import Link from "next/link";
import SignedDocument from "./SignedDocument";
import { cn } from "cn";

export default function ValueReader({ props }: { props: PolymorphicValue}) {
 switch (props.type) {
    case "text":
      return (
        <span itemProp={props.itemProp} className={cn("whitespace-pre-line text-slate-700", props.hidden && "hidden")}>
          {props.text}
        </span>
      )
    case "link":
      return (
        <Link href={props.href} itemProp={props.itemProp} className={cn("text-blue-600 hover:underline break-all font-medium" , props.hidden && "hidden")}>
          {props.text}
        </Link>
      )
    case "signedDocument":
      return (
        <SignedDocument props={props} />
      )
    default:
      return null
  }
}