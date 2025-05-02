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
            return response.data;
        }
    } catch(error){
        console.errrr("Error caught: " + error)
        throw new Error(error.response?.data?.message || "Failed to fetch task");
    }
    },

    // Creating a task means "POST" endpoint
    createTask: async (tasksData) => {
        try {
        const response = await tasksApi.post(`/newTask/${tasksData}`);
        if (response){
            console.log("Task created");
            return response.data
        }
    } catch(error){
        console.error("Error caught: " + error)
        throw new Error(error.response?.data?.message || "Failed to create task");
    }

    // Updating = patching
    updateTasks = async(taskId, updateTask) => {
        try {
        const response = await tasksApi.patch(`/updatedTask/${taskId}`, updateTask);
        if (response){
            console.log("Task updated")
            return response.data;
        }
    } catch(error){
        console.error("Error caught: " + error)
        throw new Error(error.response?.data?.message || "Failed to update task");
    }
    }

    deleteTasks = async(taskId) => {
        try {
        const response = await tasksApi.delete(`/deletedTasks/${taskId}`);
        if (response){
            console.log("Task deleted");
            return response.data;
        }
    } catch(error){
        console.error("Error caught" + error)
        throw new Error(error.response?.data?.message || "Failed to delete task");
    }
    }
}
}
