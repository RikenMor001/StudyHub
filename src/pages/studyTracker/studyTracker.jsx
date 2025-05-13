// startTime, 
// endTime,
// duration, 
// notes, 
// subject, 
// sessions, 
// isStudying, 
// breakTime 


// import { useEffect, useState } from "react"
import { Clock } from "lucide-react"
import * as React from "react"
import { Card } from "../../ui/card"

export const StudyTracker = () => {
    // const [startTime, setStartTime] = useState(null);
    // const [endTime, setEndTime] = useState(null);
    // const [duration, setDuration] = useState("");
    // const [notes, setNotes] = useState("");
    // const [subject, setSubject] = useState("");
    // const [sessions, setSessions] = useState([]);
    // const [isStudying, setIsStudying] = useState<boolean>(false);
    // const [breakTime, setBreakTime] = useState<number>(45);
    // const [currentTime, setCurrentTime] = useState(0);
    // const [currentSessionId, setCurrentSessionId] = useState(null);

    // useEffect(() => {
    //     let timer;
    //     let breakReminder;
    
    //     // If isStudying is true than setInterval which means start the timer 
    //     // setInterval has to be done through setInterval
    //     if(isStudying){
    //         timer = setInterval(() => {
    //             setCurrentTime(Math.floor((new Date() - currentTime)/1000));
    //         })

    //         // Breakreminder has to be done through setTimeout
    //         breakReminder = setTimeout(() => {
    //             alert("Time for a break");
    //         }, breakTime * 60 * 1000);         

    //         // And then after every session it has to cleared and bring it down to 0 for a new session to be started

    //         return () => {
    //             clearInterval(timer);
    //             clearTimeout(breakReminder);
    //         }
    //     }
    // }, [isStudying, startTime, breakTime])

    // // Start study session
    // const startStudySession = async() => {
    //     if(!subject){
    //         alert("Enter the subject first")
    //         return
    //     }

    //     const currentDate = new Date();
    //     setStartTime(currentDate);
    //     setEndTime(null);
    //     setDuration("");
    //     setNotes("");
    //     setIsStudying(true);
    //     setCurrentTime(0);        

    //     try {
    //         const response = await axios.post("http://locahost:3000/start-session");
    //         setCurrentSessionId(response.data.id);
    //         if (response.ok){
    //             console.log("Current session begins");
    //         }
    //     } catch(error){
    //         console.error("There is an error in starting the session", error);
    //     }
    // }

    // const endStudySession = async() => {
    //     if (!isStudying){
    //         return
    //     }
    //     const now = new Date();
    //     const timeSpent = Math.floor((now - startTime) / 1000);
    //     const sessionDuration = formatTime(timeSpent);

    //     setEndTime(now);
    //     setDuration(sessionDuration);
    //     setIsStudying(false);

    //     // Add backend routes to start and terminate requests

    //     const endingResponse = await axios.post("http://localhost:3000")
    //     setCurrentSessionId(null);
    //     currentTime(`This session ended at ${now}`);   
    // }

    // const fetchStudySession = async() => {
    //     // Will fetch the sessions from the backend 
    //     try {
    //         const response =  await axios.get("http://locahost:3000/sessions/");   
    //         setSessions(response.data);
    //     } catch(e){
    //         console.error("Their was an error while fetching studysessions" + e);
    //     }

    //     useEffect(() => {
    //         fetchStudySession();
    //     }, [])
    // }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <div className="flex-1 py-8">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-lg flex items-center jusitfy-center shadow-md">
                        <Clock className="h-7 w-7"/>
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight text-foreground">Study Tracker</h1>
                            <p className="text-slate-500 font-medium trcking-tight">
                                Track your study sessions and embrace your journey with live voice recordings.
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-[2fr, 1fr]">
                        <div className="space-y-6">
                            <Card className="p-6 border-border bg-card text-card-foreground">
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
