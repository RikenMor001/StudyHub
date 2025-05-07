import axios from "axios"
import { useEffect, useState } from "react"

export const viewMoodHistory = () => {
    const [moodHistory, setMoodHistory] = useState<string | any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | any>(null);

    const fetchMoodHistory = async() => {
        setLoading(true);
        try {
            const response = await axios.get("");
            if (response.data.success){
                setMoodHistory(response.data.moodHistory);
            } else {
                setError("Failed to fetch mood history");
            }
        } catch (error){
            setError("Error fetching mood" + error);
        } finally {
            setLoading(false)
        }

        useEffect(() => {
            fetchMoodHistory();
        }, [])
        
        return {
            moodHistory, loading,
            error,
            refereshMoodHistory: fetchMoodHistory
        }
    }
}
