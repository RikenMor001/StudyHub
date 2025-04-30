import { Link } from "react-router-dom"
import { Book, BookOpen, Clock, Dumbbell, Moon, Sun } from "lucide-react"
import { Button } from "../ui/Button"
import { useTheme } from "./theme-provider"

export function NavBar(){
const { theme, setTheme } = useTheme(); 

    return <header className="font-semibold text-sm sticky top-0 z-50 w-full border-b border-b-slate-300 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-5">
            <div className="flex h-15 items-center justify-between">
                <Link
                to="/"
                className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary"
                > 
                    <Book className="h-5 w-5"/>  
                    <span>StudyHub</span>
                </Link>

                <nav className="flex items-center gap-4">
                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary"
                    >
                    <Clock
                    className="h-5 w-5"
                    />
                    <span>Study Tracker</span>
                </Link>

                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary"
                    >
                    <Dumbbell
                    className="h-5 w-5"
                    />
                    <span>Habit Builder</span>
                </Link>

                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary"
                    >
                    <BookOpen
                    className="h-5 w-5"
                    />
                    <span>Resources</span>
                </Link>

                <Button
                className = "hover:cursor-pointer"
                variant = "ghost"
                size = "icon"
                onClick = {() => {
                    setTheme(theme === "dark" ? "light" : "dark")
                }}
                >
                    { theme === "dark"? (
                        <Sun className="h-5 w-5"/>
                    ): (
                        <Moon className="h-5 w-5"/>
                    ) }
                    <span className="sr-only">Toggle theme</span>
                </Button>
                </nav>
            </div>
        </div>
    </header>
}
// If the theme is dark, toggle key has to be a sun or else a moon basic commonsense 
