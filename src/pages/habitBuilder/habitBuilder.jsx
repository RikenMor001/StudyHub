import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { Calendar, ChartBar, MessageSquare } from "lucide-react";

export const HabitBuilder = () => {
  const [currentView, setCurrentView] = useState("chat");
  const [useGemini, setUseGemini] = useState(false);
  const [selectMood, setSelectMood] = useState(null);

  const moods = ["Happy", "Neutral", "Sad"];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="flex-1 container mx-auto px-4 py-10">
        <Tabs
          value={currentView}
          onValueChange={setCurrentView}
          className="flex flex-col h-full"
        >
          <TabsList className="grid grid-cols-3 gap-4 w-full mb-8">
            <TabsTrigger value="chat" className="flex items-center gap-2 justify-center">
              <MessageSquare className="w-5 h-5" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center gap-2 justify-center">
              <Calendar className="w-5 h-5" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="mood" className="flex items-center gap-2 justify-center">
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
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectMood(mood)}
                  className={`px-8 py-4 rounded-xl shadow-md border text-lg font-medium transition hover:shadow-lg hover:bg-blue-50 hover:cursor-pointer ${
                    selectMood === mood
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-300"
                  }`}
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
