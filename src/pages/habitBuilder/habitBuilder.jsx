import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { Calendar, ChartBar, MessageSquare } from "lucide-react";

export const HabitBuilder = () => {
  const [currentView, setCurrentView] = useState("chat");
  const [useGemini, setUseGemini] = useState(false);

  return (
    <div className="flex flex-col bg-slate-100 min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-10">
        <Tabs
          className="flex flex-col h-full"
          value={currentView}
          onValueChange={setCurrentView}
        >
          <TabsList className="grid grid-cols-3 gap-4 w-full mb-8">
            <TabsTrigger
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-white shadow-sm text-md font-semibold hover:bg-blue-100 hover:text-blue-600 transition"
              value="chat"
            >
              <MessageSquare className="w-5 h-5" />
              Chat
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-white shadow-sm text-md font-semibold hover:bg-blue-100 hover:text-blue-600 transition"
              value="calendar"
            >
              <Calendar className="w-5 h-5" />
              Calendar
            </TabsTrigger>
            <TabsTrigger
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-md bg-white shadow-sm text-md font-semibold hover:bg-blue-100 hover:text-blue-600 transition"
              value="mood"
            >
              <ChartBar className="w-5 h-5" />
              Mood
            </TabsTrigger>
          </TabsList>

          <div className="flex justify-end mb-10">
            <button
              onClick={() => setUseGemini(!useGemini)}
              className="px-5 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition text-sm font-semibold"
            >
              {useGemini ? "Using: Default AI" : "Using: Gemini AI"}
            </button>
          </div>

          <div className="flex flex-col items-center justify-center text-center text-black">
            <h2 className="text-3xl font-bold mb-2">How are you feeling today?</h2>
            <p className="text-sm text-gray-500 mb-6">
              Select your mood to begin chatting
            </p>
            <div className="flex gap-6">
              {["😊 Happy", "😐 Neutral", "😢 Sad"].map((mood) => (
                <button
                  key={mood}
                  className="bg-white border border-gray-300 px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-50 transition text-lg font-medium hover:cursor-pointer"
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
