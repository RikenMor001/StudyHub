// Card
// CardHeader
// CardTitle
// CardDescription 
// CardFooter
// CardContent

import * as React from "react"
import { cn } from "../lib/utils"

const Card = React.forwardRef(({className, ...props}, ref) => (
    <div 
    ref = { ref }
    className={cn(
        "rounded-lg border border-slate-300 shadow-md text-sm text-slate-700 bg-white"
        ,className
    )}
    {...props}
    >
    </div>
))
Card.displayName = "Card"   
export { Card }