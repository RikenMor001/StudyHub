// startTime, 
// endTime,
// duration, 
// notes, 
// subject, 
// sessions, 
// isStudying, 
// breakTime 


// import { useEffect, useState } from "react"
import { Clock1 } from "lucide-react"
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
        <div className="flex flex-cols">
            <div className="flex-1">
                <div className="mx-auto max-w-4xl">
                    <div className="inline-flex pt-8 flex justify-center">
                        <Clock1 className="pr-2 h-10 w-10 text-blue-500"/>
                        <div>
                            <h1 className="text-3xl font-bold">Study Tracker</h1>
                            <p className="font-semibold tracking-tight text-slate-500">Track your studies and embrace the journey with study tracker.</p>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
