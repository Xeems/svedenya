import { PolymorphicValue } from "@/@types/schema";
import Link from "next/link";
import SignedDocument from "./SignedDocument";

export default async function ValueReader({ value, itemProp }: { value: PolymorphicValue; itemProp: string}) {
 switch (value.type) {
    case "text":
      return (
        <span itemProp={itemProp} className="whitespace-pre-line text-slate-700">
          {value.text}
        </span>
      )
    case "link":
      return (
        <Link href={value.href} itemProp={itemProp} className="text-blue-600 hover:underline break-all font-medium">
          {value.text}
        </Link>
      )
    case "signedDocument":
      return (
        <SignedDocument documentHref={value.href} signHref={value.signHref} itemProp={itemProp}>
          {value.text}
        </SignedDocument>
      )
    default:
      return null
  }
}