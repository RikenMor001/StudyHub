import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import { Calendar, ChartBar, MessageSquare } from "lucide-react";

export const HabitBuilder = () => {
  const [currentView, setCurrentView] = useState("chat");
  const [useGemini, setUseGemini] = useState(false);
  const [selectMood, setSelectMood] = useState(null);
  
  const moods = ["Happy", "Neutral", "Sad"];

  const date = new Date();

  // const [moodHistory, setMoodHistory] = useState([
  //   {
  //     id: "1",
  //     mood: "Happy",
  //     note: "Completed all my tasks",
  //     timestamp: date.toToString() 
  //   },
  //   {
  //     id: "2",
  //     mood: "Stressed",
  //     note: "Preparing for upcoming exams",
  //     timestamp: date.toToString() 
  //   },
  //   {
  //     id: "3",
  //     mood: "Energetic",
  //     note: "Completed my morning workout!",
  //     timestamp: date.toToString() 
  //   },
  // ])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <main className="flex-1 container mx-auto px-4 py-10">
        <Tabs
          value={currentView}
          onValueChange={setCurrentView}
          className="flex flex-col h-full"
        >
          <TabsList className="grid grid-cols-3 gap-4 w-full mb-8">
            <TabsTrigger value="chat" className="flex items-center justify-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Chat
            </TabsTrigger>
            <TabsTrigger value="calendar" className="flex items-center justify-center gap-2">
              <Calendar className="w-5 h-5" />
              Calendar
            </TabsTrigger>
            <TabsTrigger value="mood" className="flex items-center justify-center gap-2">
              <ChartBar className="w-5 h-5" />
              Mood
            </TabsTrigger>
          </TabsList>

          <div className="flex justify-end mb-10">
            <button
              onClick={() => setUseGemini(!useGemini)}
              className="px-5 py-2 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100 transition text-sm font-medium"
            >
              {useGemini ? "Using: Default AI" : "Using: Gemini AI"}
            </button>
          </div>

          <section className="flex flex-col items-center text-center text-black">
            <h2 className="text-3xl font-bold mb-2">How are you feeling today?</h2>
            <p className="text-sm text-gray-500 mb-6">
              Select your mood to begin chatting
            </p>
            <div className="flex gap-6">
              {moods.map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectMood(mood)}
                  className={`px-8 py-4 rounded-xl shadow-md border text-lg font-medium transition duration-200 hover:shadow-lg hover:bg-blue-50 ${
                    selectMood === mood
                      ? "bg-blue-100 border-blue-400"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {mood}
                </button>
              ))}
            </div>
          </section>
        </Tabs>
      </main>
    </div>
  );
};
