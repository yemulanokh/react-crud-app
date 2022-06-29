import axios from 'axios';

const API_URL = 'http://127.0.0.1:3002/users';
export const addUser = async (data) => {
    try {
        return await axios.post(API_URL, data);
    } catch (error) {
        console.log('Error while addUser api', error.message)
    }
} 

export const getUsers = async () => {
    try{
         return await axios.get(API_URL);
    }catch(error) {
        console.log('Error while calling getusers api',error.message);
    }
}

export const getUser = async (id) => {
    try{
         return await axios.get(`${API_URL}/${id}`);
    }catch(error) {
        console.log('Error while calling getuser api',error.message);
    }
}

 export const editUser = async (data,id) => {
     try{
        return await axios.put(`${API_URL}/${id}`, data)

     }catch(error){
        console.log('Error while calling edituser api',error.message);
     }
 }

 export const deleteUser = async (id) => {
    try{
        return await axios.delete(`${API_URL}/${id}`)

    }catch(error){
        console.log('error while calling deleteUser api',error.message);
    }
 }