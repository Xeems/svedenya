import { HTMLAttributes } from "react";

type PageHeaderProps = HTMLAttributes<HTMLHeadingElement>

export default function PageH1Header(props: PageHeaderProps) {
    
    return (
    <h1  className={`${props.className} text-4xl font-bold text-primary-foreground mb-8`}
        {...props}>
        {props.children}
    </h1>
    )
}