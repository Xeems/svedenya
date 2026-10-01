import { PolymorphicValue } from "@/@types/schema";
import Link from "next/link";
import SignedDocument from "./SignedDocument";

export default function ValueReader({ props }: { props: PolymorphicValue}) {
 switch (props.type) {
    case "text":
      return (
        <span itemProp={props.itemProp} className="whitespace-pre-line text-slate-700">
          {props.text}
        </span>
      )
    case "link":
      return (
        <Link href={props.href} itemProp={props.itemProp} className="text-blue-600 hover:underline break-all font-medium">
          {props.text}
        </Link>
      )
    case "signedDocument":
      return (
        <SignedDocument type="signedDocument" href={props.href} signHref={props.signHref} itemProp={props.itemProp} text={props.text}/>
      )
    default:
      return null
  }
}