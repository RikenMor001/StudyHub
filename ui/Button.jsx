import * as React from " react "
import { cn } from "../lib/utils"
import { cva } from "class-variance-authority"

const buttonVariants = cva({
    variants: {
        variant: {
            
        },
        size: {

        }
    }
})

const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}), ref => {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp
        className = {cn(buttonVariants(varirant, size, className))} 
        ref = { ref }
        {...props}
        />
    )
}) 
Button.displayName = "Button"
export { Button , buttonVariants }
