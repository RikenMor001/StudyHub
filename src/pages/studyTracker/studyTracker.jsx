// startTime, 
// endTime,
// duration, 
// notes, 
// subject, 
// sessions, 
// isStudying, 
// breakTime 

import { useState } from "react"

const StudyTracker = () => {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [duration, setDuration] = useState("");
    const [notes, setNotes] = useState("");
    const [subject, setSubject] = useState("");
    const [sessions, setSessions] = useState([]);
    const [isStudying, setIsStudying] = useState<boolean>(false);
    const [breakTime, setBreakTime] = useState<number>(null);
} 

export { StudyTracker }; 
