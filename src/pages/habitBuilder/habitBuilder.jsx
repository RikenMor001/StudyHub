
import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs"
import { Calendar, ChartBar, MessageSquare } from "lucide-react";

export const HabitBuilder = () => {
        const [currentView, setCurrentView] = useState("chat");
        const [useGemini, setUseGemini] = useState(false);

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

                    <div className="">
                        <button className="border border-slate-300 rounded-md px-3 py-2 shadow-md bg-white text-black hover:cursor-pointer hover:bg-slate-100 font-semibold" 
                        onClick={() => setUseGemini(!useGemini)}
                        >
                            {useGemini ? "Using: Default AI" : "Using: Gemini AI"}
                        </button>
                    </div>
                    <div className="text-black flex justify-center items-center h-screen font-semibold tracking-tight text-2xl flex-col">
                        How are you feeling today?
                        <p className="text-sm font-semibold tracking-tight text-slate-500 p-2"> Select your mood to begin chatting</p>
                        <div className="inline-flex mt-5">
                            <div className="border border-slate-300 shadow-md px-3 py-10 mr-5 font-semibold rounded-md">
                                Happy 
                            </div>
                            <div className="border border-slate-300 shadow-md px-3 py-10 mr-5 font-semibold rounded-md">
                                Neutral
                            </div>
                            <div className="border border-slate-300 shadow-md px-7 py-10 mr-5 font-semibold rounded-md">
                                Sad
                            </div>
                        </div>
                    </div>
                    
                </Tabs>
            </main>
        </div>
)
}
