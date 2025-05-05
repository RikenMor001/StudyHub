import * as React from "react"
import { cn } from "../lib/utils"

export const Card = React.forwardRef(({className, ...props}, ref) => {
    <div 
    ref = { ref }
    className = {cn(
        "bg-slate-300 rounded-lg px-20 py-30",
        className
    )} 
    {...props}
    />
})
Card.displayName = "Card"
