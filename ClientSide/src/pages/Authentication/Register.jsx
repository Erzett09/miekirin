
import '../../assets/css/register.css'
import Navbar from '../../Components/Navbar'
import { Register } from '../../config/services'
import Modal from '../../Components/Modal';
import { useState, useEffect, } from 'react';
export default function RegisterPage() {
    const [modal,setModal] = useState(false)
    const [title,setTitle] = useState('')
    const [content,setContent] = useState('')
    const HandleRegister = async () => {
    
        try {
            const data = await Register({
                username: document.getElementById('username').value,
                email : document.getElementById('email').value,
                password : document.getElementById('password').value
            })

            localStorage.setItem('token',data.token)
            localStorage.setItem('user',JSON.stringify(data.data))

            setModal(true)
            setTitle(data.status)
            setContent(data.message)
        } catch (error) {
                setModal(true)
                setTitle(error.response.data.status)
                setContent(error.response.data.message)
            }
        };
    
    return (
        <>
        {modal && (
            <Modal setModal={setModal} title={title} content={content}/>
        )}
    
            <div className="container-register">
                <div className="wrapper-register">
                    <div className="policy">
                        <ol>
                            <li>
                                dengan mendaftarkan akun, anda bisa memesan (order) makanan
                                dan diantarkan ke rumah anda.
                            </li>
                            <li>
                                keamanan data data akun anda di jamin oleh sistem kami.
                            </li>
                            <li>
                                sistem kami menggunakan keamanan yang sudah memenuhi standar perusahaan.
                            </li>
                            <li>
                                anda bisa melapor ke direktor bisnis ini, apabila ada ketidak nyamanan dengan pelayanan kami.
                            </li>
                        </ol>
                    </div>

                    <div className="register">
                        <form className="register-form">
                            <div className="wrapper-field">
                                
                                <input name="username" type="text" id="username" placeholder='nama pengguna'/>
                            </div>
                            <div className="wrapper-field">
                                {/* <label htmlFor="email">email</label> */}
                                <input type="email" id="email" name="email" placeholder='pengguna@email.com'/>
                            </div>

                            <div className="wrapper-field">
                                {/* <label htmlFor="password">kata sandi</label> */}
                                <input type="password" id="password" name="password" placeholder='kata sandi'/>
                            </div>

                            <div className="submit-button" onClick={() => {HandleRegister()}}>Daftar sekarang</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}