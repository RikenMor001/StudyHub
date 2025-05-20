
import * as React from "react"
import TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../lib/utils";

export const Tabs = TabsPrimitive.Root

export const TabsList = React.forwardRef(({className, ...props}, ref)=> (
    <TabsPrimitive.List
        ref = {ref}
        className = {cn(
            "",
            className
        )}
        {...props}
    />
))

TabsList.displayName = TabsPrimitive.List.displayName;

export const TableTabs = React.forwardRef(({className, ...props}, ref) => (
    <TablePrimitive.Triger
    ref = {ref}
    className = {cn(
        "",
        className
    )}
    {...props}
    />
))

TableTabs.displayName = TabsPrimitive.Trigger.displayName;
