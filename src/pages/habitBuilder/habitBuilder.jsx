
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"
import { Calendar, ChartBar, MessageSquare } from "lucide-react";

export const HabitBuilder = () => {
        const [currentView, setCurrentView] = useState("chat");

        return (
        <div className="flex flex-col bg-slate-100 h-screen">
            <main className="flex-1 container mx-auto px-2 sm:px-4 overflow-hidden">                          
                <Tabs className = "h-full flex flex-col" value = {currentView} onValueChange = {setCurrentView}>
                    <TabsList className = "grid w-full grid-cols-3 mb-2 sm:mb-4">
                        <TabsTrigger className = "flex items-center gap-10 sm:gap-2 text-md hover:text-blue-500" value = "chat">
                            <MessageSquare className="w-6 h-6"/>
                            Chat                            
                        </TabsTrigger>
                        <TabsTrigger className = "flex items-center gap-1 sm:gap-2 text-md hover:text-blue-500" value = "calender">
                            <Calendar className="w-6 h-6"/>
                            Calender
                        </TabsTrigger>
                        <TabsTrigger className = "flex items-center gap-1 sm:gap-2 text-md hover:text-blue-500" value = "mood">
                            <ChartBar className="w-6 h-6"/>
                            Mood
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </main>
        </div>
)
}
