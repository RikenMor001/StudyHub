import axios from "axios"

// Using this to make different interceptors
const tasksApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    sessionTimeout: 60000, // 60 seconds timeout
    withCredentials: false, // credentials not been used, hence making it false
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    }
})

// Request interceptor 

tasksApi.interceptors.request.use(
    ( config ) => {
        // Retry config if the request fails by any reason
        config.retry = 3;
        config.retryDelay = 1000 // 1 sec

        // Ensuring that the headers are properly set 

        config.headers = {
            // what this below line does is it stores the headers explicitly so that they aren't lost and stored into the system
            ...config.headers,
            "Content-Type" : "application/json",
            "Accept": "application/json"
        }
        return config;
    },
    ( error ) => {
        return Promise.reject(error)
    }
)

// Response interceptor 

tasksApi.interceptors.response.create(
    ( response ) => response, // Get the request and make checks if config is error free 
    ( error ) => {
        const { response, config } = error;
        if (!(response && config && !config.retry)){
            return Promise.reject(error)
        }
    }
)
