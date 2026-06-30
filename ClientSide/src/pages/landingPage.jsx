import Navbar from "../Components/Navbar"
import ImageProduct from "../Components/ImageProduct"
import '../assets/css/landing_page.css'
import Image from '../assets/images/chickennoodle.png'
import ChefKitten from '../assets/images/chef_kitten.png'
import RyanHaryanto from '../assets/images/ryanharyanto.jpg'
import { createContext } from "react"
import { useRef } from "react"

export const mainMenu = createContext()

export default function LandingPage() {

    const SectionMainRef = useRef(null)
    const SectionMenuRef = useRef(null)

    const scrollToMenu = () => {
        SectionMenuRef.current?.scrollIntoView({
            behavior: 'smooth',
            block : 'start'
        })
    }

    return (
        <>

        <mainMenu.Provider value={{ SectionMainRef }}>


        <div className="main-content">
        <header>
        <Navbar/>
        </header>

        <section className="main-section" ref={SectionMainRef}>

        <ImageProduct src={Image}/>

        <div className="container-text">
            <h2>Miekirin</h2>
            <p>Mie ayam dengan komposisi bumbu bumbu terbaik pilihan
                <br></br>dibuat dengan tepung berkualitas
            <br></br>dan di sajikan oleh chef profesional</p>
            <div className="check-menu-button" onClick={() => {scrollToMenu()}}>Cek menu</div>
        </div>
        </section>

        <section className="menu-section" id="menu-section" ref={SectionMenuRef}>
                <div className="container-menu">
                    <div className="menu">

                    <div className="wrapper-menu">
                        <h2>MAKANAN</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        NO
                                    </th>
                                    <th>
                                        NAMA
                                    </th>
                                    <th>
                                    HARGA
                                    </th>
                                    </tr>
                            </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Miekirin</td>
                            <td>Rp.12.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Miekirin Ayam</td>
                            <td>Rp.15.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Miekirin Telor</td>
                            <td>Rp.15.000,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Miekirin Ayam + telor</td>
                            <td>Rp.20.000,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>

                {/* =========== M  I  N  U  M  A N  ============ */}

            <div className="wrapper-menu">
                <h2>MINUMAN</h2>
                <table>
                    <thead>
                        <tr>
                            
                        <th>
                            NO
                        </th>
                        <th>
                            NAMA
                        </th>
                        <th>
                            HARGA
                        </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Teh pucuk solo</td>
                            <td>Rp.5.000,00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Es lemon</td>
                            <td>Rp.5.000,00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jus alpukat</td>
                            <td>Rp.10.000,00</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Milkshake</td>
                            <td>Rp.15.000,00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

            <div className="container-chef">
                <img src={ChefKitten} className="chef" alt="chef kitten image, he is the perfect chef in the world"/>
                <h2>Chef kitten</h2>
            </div>
        </section>

        <section className="contact-section" id="contact-section">
            <h2>MANAJER DARI BISNIS MIEKIRIN</h2>
            <div className="wrapper-contact">
                <div className="contact-image">
                        <img src={RyanHaryanto} className="img" alt="foto manajer perusahaan miekirin" />
                </div>

                <div className="contact-information">
                    <h2>Ryan Haryanto</h2>
                    <p>Seorang manajer dari Miekirin,<br/> adalah sosok yang bertanggung jawab atas bisnis ini <br/>anda bisa mengajukan laporan tentang bisnis ini.</p>
                    <div className="button-contact">Hubungi Sekarang</div>
                </div>
            </div>
        </section>


        </div>
        </mainMenu.Provider>
        </>
    )
}