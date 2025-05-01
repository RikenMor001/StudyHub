// Get all the tasks
// Create a new task 
// Update the tasks
// Delete the tasks

import tasksApi from "./axios"

export const useTaskApi = {
    getTasks: async ( userId ) => {
        try{
        const response = await tasksApi.get(`/tasks/${userId}`);
        if (response){
            console.log("Tasks fetched")
        }
    } catch(error){
        console.log("Error caught is " + error)
        throw new Error(error.response?.data?.message || "Failed to fetch data");
    }
    },

    // Creating a task means "POST" endpoint
    createTask: async (tasksData) => {
        try {
        const response = await tasksApi.post(`newTask/${tasksData}`);
        if (response){
            return response.data
        }
        console.log("Error in creating the task");
    } catch(error){
        console.error("Error is" + error);
    }
}
}
