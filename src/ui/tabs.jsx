
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList = React.forwardRef(({className, ...props}, ref) => (
    <TabsPrimitive.List
    ref = {ref}
    className={cn(
        "inline-flex items-center justify-center rounded-md bg-white p-1 text-black shadoow-lg border border-slate-200 shadow-sm hover:cursor-pointer font-semibold", 
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
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2",
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
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-2",
        className
    )}  
    {...props}
    />
))

TabsContent.displayName = TabsPrimitive.Content.displayName;
