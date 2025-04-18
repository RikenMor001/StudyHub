import { Link } from "react-router-dom"
import { Book, BookOpen, Clock, Dumbbell } from "lucide-react"

export function NavBar(){
    return <header className="font-semibold text-lg sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-5">
            <div className="flex h-14 items-center justify-between">

                <Link
                to="/"
                className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
                > 
                    <Book className="h-6 w-6"/>  
                    <span>StudyHub</span>
                </Link>

                <nav className="flex items-center gap-4">
                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
                    >
                    <Clock
                    className="h-6 w-6"
                    />
                    <span>Study Tracker</span>
                </Link>

                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
                    >
                    <Dumbbell
                    className="h-6 w-6"
                    />
                    <span>Habit Builder</span>
                </Link>

                <Link
                    to="/habit-builder"
                    className="flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
                    >
                    <BookOpen
                    className="h-6 w-6"
                    />
                    <span>Resources</span>
                </Link>
                </nav>
            </div>
        </div>
    </header>
}
