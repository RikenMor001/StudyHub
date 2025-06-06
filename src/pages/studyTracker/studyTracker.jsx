 import { Clock1 } from "lucide-react";
import { useRef, useState } from "react";

export const StudyTracker = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const referenceId = useRef(null); // Takes the time as a reference and sets the initial value as null, passes the condition to make it true and start the timer and ending the session afterwards to end the session and RESTART the timer session 

  // Formating the timer in Hours, Minutes and Seconds
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}` 
  }

  const startTimer = () => {
    if (!isRunning){
      setIsRunning(true);
      referenceId.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
        if (time === 3600){
          clearInterval(interval)
        }
      }, 1000) // The request needs to be going in every 1000 ms
    }
    alert("Session started");
  }

  const endSession = () => {
    if (referenceId.current){
      clearInterval(referenceId.current);
    }
    setIsRunning(false);
    setTime(0);
    alert("Session Ended")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 px-4 shadow-lg">
      <div className="max-w-4xl mx-auto">

        <div className="flex items-center gap-4 mb-10 justify-center">
          <Clock1 className="h-8 w-8 text-blue-500 font-semibold" />
          <div>
            <h1 className="text-3xl font-bold text-black">Study Tracker</h1>
            <p className="text-sm text-slate-500 font-semibold mt-1">
              Focused study sessions made simple and calming.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 bg-white border border-slate-200 rounded-lg p-6">

          <div>
            <h2 className="text-lg font-bold text-slate-700 mb-4">Start a Session</h2>

            <label className="block text-sm text-slate-600 m
            1hr 30minb-1 font-semibold">Subject</label>
            <input
              type="text"
              placeholder="e.g., Physics, Coding, History"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 bg-slate-50 text-slate-700"
            />

            <div className="mt-5 flex gap-3">
              <button className="flex-1 bg-blue-100 text-blue-700 rounded-md py-2 hover:bg-blue-200 transition hover:cursor-pointer" onClick={startTimer}>
                Start Session
              </button>
              <button className="flex-1 bg-slate-200 text-slate-700 rounded-md py-2 hover:bg-slate-300 transition hover:cursor-pointer" onClick={endSession}>
                End Session
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-slate-500 font-semibold">Elapsed Time</p>
              <p className="text-xl font-medium text-blue-600"> {formatTime(time)}</p>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-slate-700">Past Sessions</h2>
              <button className="text-sm text-blue-500 font-semibold hover:underline">View All</button>
            </div>

            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                <div className="border border-slate-200 rounded-md p-4 bg-slate-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Subject</p>
                      <p className="text-sm font-semibold text-slate-700">Mathematics</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-semibold">Duration</p>
                      <p className="text-sm font-medium text-green-600">
                        1h 30m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-md p-4 bg-slate-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Subject</p>
                      <p className="text-sm font-semibold text-slate-700">Physics</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-semibold">Duration</p>
                      <p className="text-sm font-medium text-green-600">
                        1h 30m
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-md p-4 bg-slate-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-slate-500 font-semibold">Subject</p>
                      <p className="text-sm font-semibold text-slate-700">Chemistry</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-slate-500 font-semibold">Duration</p>
                      <p className="text-sm font-medium text-green-600">
                        1h 30m
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
