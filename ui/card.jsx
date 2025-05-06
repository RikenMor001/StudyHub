// Card
// CardHeader
// CardTitle
// CardDescription 
// CardFooter

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

const CardHeader = React.forwardRef(({className, ...props}, ref) => (
    <div
    ref = { ref }
    className = {cn(
        "bg-amber-300 rounded-lg px-20 py-30", 
        className
    )}
    {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({className, ...props}, ref) => (
    <div
    ref = { ref }
    className = {cn(
        "bg-purple-300 rounded-lg px-20 py-30",
        className
    )}
    {...props}
    />
))

CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({className, ...props}, ref) => (
    <div
    ref = { ref }
    className = {cn(
        "bg-green-300 rounded-lg px-20 py-30", 
        className
    )}
    {...props}
    />
))
CardDescription.displayName = "CardDescription"

