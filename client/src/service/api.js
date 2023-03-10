import axios from "axios";

const URL = "http://localhost:8000";

export const addUser = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);
    } catch (error) {
        console.log("Error while calling add User Api", error);
    }
}

export const getUsers = async () => {
    try {
        const response = await axios.get(`${URL}/all`)
        return response.data
    } catch (error) {
        console.error("Error while calling getUsers API:", error)
    }
}

export const getUser = async (id) => {
    try {
        await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Errorr while calling getUser api", error)
    }
}

export const editUser = async (id, user) => {
    return await axios.put(`${URL}/${id}`, user)
}
export const deleteUser = async (id) => {
    return await axios.delete(`${URL}/${id}`);
}