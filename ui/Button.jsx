import * as React from "React"

const Button = React.forwardRef(({className, vairant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button"
    return (|
        <Comp
        className = {cn}
        ref = {ref}
        {...props}
        />
    )
})

Button.deisplayName = "Button"
export { Button }
