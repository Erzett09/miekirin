import { useState,useEffect } from "react"
import '../assets/css/navbar.css'
import { useContext } from "react"
import { mainMenu } from "../pages/landingPage"
export default function Navbar() {
    const [Login,setLogin] = useState(false)
    const {SectionMainRef} = useContext(mainMenu)
    useEffect(() => {
        const auth_token = localStorage.getItem('auth_token')

        if(!auth_token) return;

        setLogin(true)
    },[])


    const ScrollToMain = () => {

        SectionMainRef.current?.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }
    return (
        <div className="wrapper-navbar">
            <div className="logo">
                <h2 className="logo-text" onClick={() => {ScrollToMain()}}>Miekirin</h2>
            </div>

            <div className="menu-navbar">
                <nav>
                    <ul>
                        <li>
                            <a href="#menu-section">Menu</a>
                        </li>
                        <li>
                            <a href="#contact-section">Contact</a>
                        </li>
                        <li>
                            <a href="">Location</a>
                        </li>
                        <li>
                            <a href="">Order</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container-account">
                {Login ? (
                    <div className="account">🤵</div>
                ) : (
                    <>
                    <div className="register-button" onClick={() => {window.location.href = '/register'}}>Register</div>
                    <div className="login-button">Login</div>
                </>
                )}
            </div>
        </div>
    )
}