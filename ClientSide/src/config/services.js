import axios from 'axios'
import { GetCookie } from './cookie'
const API_URL = 'http://127.0.0.1:8000/api' 
export const Register = async (data) => {
    const response = await axios.post(API_URL + '/register',data)

    return response.data
}

export const Login = async (data) => {
    return (await axios.post(API_URL + '/login',data)).data;
}

export const PostOrder = async (data) => {
    return (await axios.post(API_URL + '/order/post',data,
        {
            headers : {
                Authorization : `Bearer ${GetCookie('auth_token')}`
            }
        }
    )).data;
}

