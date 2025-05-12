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
                className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary p-2"
                > 
                    <Book className="h-6 w-6"/>  
                    <span className="text-2xl font-semibold hover:text-blue-600">StudyHub</span>
                </Link>

                <nav className="flex items-center gap-4">
                <Link
                    to="/study-tracker"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary p-2"
                    >
                    <Clock
                    className="h-5 w-5"
                    />
                    <span className="hover:text-blue-600">Study Tracker</span>
                </Link>

                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary p-2"
                    >
                    <Dumbbell
                    className="h-5 w-5"
                    />
                    <span className="hover:text-blue-600">Habit Builder</span>
                </Link>

                <Link
                    to="/resources"
                    className="flex items-center gap-2 text-sm font-semibold transition-colors hover:text-smimary p-2"
                    >
                    <BookOpen
                    className="h-5 w-5"
                    />
                    <span className="hover:text-blue-600">Resources</span>
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
