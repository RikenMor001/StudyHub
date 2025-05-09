// startTime, 
// endTime,
// duration, 
// notes, 
// subject, 
// sessions, 
// isStudying, 
// breakTime 

import { useEffect, useState } from "react"

const StudyTracker = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [duration, setDuration] = useState("");
    const [notes, setNotes] = useState("");
    const [subject, setSubject] = useState("");
    const [sessions, setSessions] = useState([]);
    const [isStudying, setIsStudying] = useState<boolean>(false);
    const [breakTime, setBreakTime] = useState<number>(45);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        let timer;
        let breakReminder;
    
        if(isStudying){
            timer = setInterval(() => {
                setCurrentTime(Math.floor((new Date() - currentTime)/1000));
            })
              
        }
    }, [])
} 

export { StudyTracker }; 
