
import { Slot } from "@radix-ui/react-slot"  // slot helps you pass children within, without harming/disrupting tailwindcss dynamicaly
import * as React from "react"
import { cn } from "../lib/utils"
import { cva } from "class-variance-authority"

export const buttonVariants = cva({
    // variants are yet to be added, this is jsut to make it work temporarily 
    variants: {
        variant: {
            default: "text-slate-500"
        },
        size: {
            default: "h-5 w-5"
        }
    }
})

export const Button = React.forwardRef(({className, size, variant, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
        className = {cn(buttonVariants({variant, size, className}))}
        ref = {ref}
        {...props}
        />
    )
})

Button.displayName = "Button"



