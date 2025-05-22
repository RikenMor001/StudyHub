// import { useState } from "react"
// import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

export const HabitBuilder = () => {
        const [currentView, setCurrentView] = useState("chat");

        return (
        <div className="flex flex-col bg-slate-100 h-screen">
            <main className="flex-1 container mx-auto px-2 sm:px-4 overflow-hidden">                          
                <Tabs className = "h-full flex flex-col" value = {currentView} onValueChange = {setCurrentView}>
                    <TabsList className = "grid w-full grid-cols-3 mb-2 sm:mb-4">
                        <TabsTrigger className = "flex items-center gap-10 sm:gap-2 text-sm" value = "chat">
                            Chat                            
                        </TabsTrigger>
                        <TabsTrigger className = "flex items-center gap-1 sm:gap-2 text-sm" value = "calender">
                            Calender
                        </TabsTrigger>
                        <TabsTrigger className = "flex items-center gap-1 sm:gap-2 text-sm" value = "mood">
                            Mood
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </main>
        </div>
)
}
