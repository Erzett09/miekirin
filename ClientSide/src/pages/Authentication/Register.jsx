
import '../../assets/css/register.css'
import Navbar from '../../Components/Navbar'

export default function RegisterPage() {
    return (
        <>
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

                            <div className="submit-button">Daftar sekarang</div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}