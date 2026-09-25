import { cn } from "cn";
import { HTMLAttributes } from "react";

type PageHeaderProps = HTMLAttributes<HTMLHeadingElement>

export default function PageH1Header(props: PageHeaderProps) {
    
    return (
    <h1  
        {...props} 
        className={cn(`text-4xl font-bold text-primary-foreground`, props.className)}
       >
        {props.children}
    </h1>
    )
}