import styleSidebar from '../assets/css/sidebar.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GetCookie } from '../config/cookie';

export const Sidebar = () => {

    const [sidebar, setSidebar] = useState(true);
    const navigate = useNavigate();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        const token = GetCookie('auth_token');
        if(!token) {
            localStorage.removeItem('user');
            return navigate('/login');
        }

        if (!user) {

            const GetUser = async () => {
                const response = await axios.get('http://127.0.0.1:8000/api/user', {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });
                
                const result = response.data;
                localStorage.setItem('user',JSON.stringify(result.data));
                setUser(JSON.parse(result.data));
            }
            
            GetUser();
        }
    },[])

    return (
        <div className={`${styleSidebar.sidebar} ${sidebar ? styleSidebar.active : styleSidebar.closed}`}>
                        <h2 className={styleSidebar['toggle-button']} onClick={() => setSidebar(!sidebar)}>⬅️</h2>
                        <h2>{user?.name}</h2>
        
                    <div className={styleSidebar.menu}>
                        <ul>
                            <li onClick={() => {navigate('/dashboard')}}>
                                Home
                            </li>
                            <li>
                                profile
                            </li>
                            <li onClick={() => {window.location.href = '/dashboard/mycart/1'}}>
                                    my order
                            </li>
                            <li>
                                my cart    
                            </li>
                        </ul>
                    </div>
        </div>
    )
}