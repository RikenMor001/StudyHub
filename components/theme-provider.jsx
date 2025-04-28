import { useContext, useEffect, useState } from "react";

// children, storageKey, defaultTheme
export function ThemeProvider({
    children,
    storageKey = "vite-ui-theme",
    defaultTheme = "system"
}){
    const [theme, setTheme ] = useState(() => {
        localStorage.getItem(storageKey) || defaultTheme; 
    })

    useEffect(() => {
        // we remove 2 components from the windows classList and make a new variable of our own and push it accordingly
        const root = window.document.documentElement;
        root.classList.remove("light", "dark")

        if (theme == "system"){
            const  systemTheme = window.matchMedia("(prefers-color-schema: dark)")
            .matches
            ? "dark"
            : "light"
            root.classList.add(systemTheme);
            return
        }
    }, [theme])

    const value = {
        theme,
        setTheme: (theme) => {
            localStorage.setItem(storageKey, theme)
            setTheme(theme)
        }
    }

    return (
        <ThemeProviderContext.Provider value = { value }> 
            { children } 
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);

    if (context === undefined){
        throw new Error("useTheme must be used uder a theme provider");
    }
    return context
}
