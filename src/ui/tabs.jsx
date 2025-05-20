
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import cn from "../lib/utils"

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef(({className, ...props}, ref) => (
    <TabsPrimitive.List
    ref = {ref}
    className={cn(
        "",
        className
    )}
    {...props}
    />
))

TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef(({className, ...props}, ref) => (
    <TabsPrimitive.List
    ref = {ref}
    className={cn(
        "",
        className
    )}
    {...props}
    />
))

TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef(({className, ...props}, ref) => (
    <TabsPrimitive.List
    ref = {ref}
    className={cn(
        "",
        className
    )}
    {...props}
    />
))

TabsContent.displayName = TabsPrimitive.Content.displayName;
