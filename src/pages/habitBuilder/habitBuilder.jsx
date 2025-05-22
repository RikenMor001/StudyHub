// import { useState } from "react"
// import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"

export const HabitBuilder = () => {
        const [currentView, setCurrentView] = useState("chat");

        return <div className="flex flex-col bg-slate-100 h-screen">
            <main className="flex-1 container mx-auto px-2 sm:px-4 overflow-hidden">                          
                <Tabs className = "h-full flex flex-col" value = {currentView} onValueChange = {setCurrentView}>
                    <TabsList>
                        <TabsTrigger>
                            Chat
                        </TabsTrigger>
                        <TabsTrigger>
                            Calender
                        </TabsTrigger>
                        <TabsTrigger>
                            Mood
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
            </main>
        </div>
}
