import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000/api' 
export const Register = async (data) => {
    const response = await axios.post(API_URL + '/register',data)

    return response.data
}

export const Login = async (data) => {
    return (await axios.post(API_URL + '/login',data)).data;
}