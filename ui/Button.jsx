
import { cn } from "../lib/utils"
import { cva } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import * as React from "react"

const buttonVariants = cva({
    variants: {
        variant: {

        },
        size: {

        }
    }
})

export const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : " button ";
    return (
        <Comp
        className = {cn(buttonVariants({className, variant, size}))}
        ref = { ref }
        {...props}
        /> 
    )
})
Button.displayName = "button"
