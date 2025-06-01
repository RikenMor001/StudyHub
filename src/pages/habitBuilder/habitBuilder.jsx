import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { Calendar, ChartBar, MessageSquare } from "lucide-react";

export const HabitBuilder = () => {
  const [currentView, setCurrentView] = useState("chat");
  const [useGemini, setUseGemini] = useState(false);

  return (
    <div className="flex flex-col bg-slate-100 min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-6">
        <Tabs
          className="flex flex-col h-full"
          value={currentView}
          onValueChange={setCurrentView}
        >
          <TabsList className="grid grid-cols-3 w-full mb-6 gap-2">
            <TabsTrigger
              className="flex items-center justify-center gap-2 text-md font-medium hover:text-blue-500"
              value="chat"
            >
              <MessageSquare className="w-5 h-5" />
              Chat
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center justify-center gap-2 text-md font-medium hover:text-blue-500"
              value="calendar"
            >
              <Calendar className="w-5 h-5" />
              Calendar
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center justify-center gap-2 text-md font-medium hover:text-blue-500"
              value="mood"
            >
              <ChartBar className="w-5 h-5" />
              Mood
            </TabsTrigger>
          </TabsList>

          <div className="mb-8">
            <button
              className="border border-slate-300 rounded-md px-4 py-2 bg-white text-black font-semibold shadow-sm hover:bg-slate-200 transition"
              onClick={() => setUseGemini(!useGemini)}
            >
              {useGemini ? "Using: Default AI" : "Using: Gemini AI"}
            </button>
          </div>

          <div className="text-center text-black font-semibold tracking-tight text-2xl flex flex-col items-center justify-center gap-2">
            <h2>How are you feeling today?</h2>
            <p className="text-sm text-slate-500">Select your mood to begin chatting</p>

            <div className="flex gap-6 mt-6">
              {["Happy", "Neutral", "Sad"].map((mood) => (
                <button
                  key={mood}
                  className="bg-white border border-slate-300 rounded-lg px-8 py-6 shadow hover:bg-slate-100 font-medium transition hover:cursor-pointer"
                >
                  {mood}
                </button>
              ))}
            </div>
          </div>
        </Tabs>
      </main>
    </div>
  );
};
