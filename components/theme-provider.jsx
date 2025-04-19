import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext();

export function ThemeProvider({
    children,
    defaultTime = "system",
    storageKey = "vite-ui-theme"
}){
    const [ theme, setTheme ] = useState(() => localStorage.getItem(storageKey) || defaultTime);

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light","dark")
        
        if (theme == "system"){
            const defaultTheme = window.matchMedia("(preferes-color-scheme: dark)")
            .matches
            ? "dark"
            : "light"
            root.classList.add(defaultTheme)
            return
        }

        root.classList.add(theme)
    }, [theme])

    const value= {
        theme,
        setTheme: (theme) => {
            localStorage.getItem(storageKey, theme)
            setTheme(theme)
        }
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            { children }
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext()
    if (context == undefined){
        throw new Error("UseeTheme has to be wrapped inside a ThemeProvider")
    }
    return context
}


