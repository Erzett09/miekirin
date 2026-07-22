
import style from '../assets/css/qrispayment.module.css'
import QRCode from 'react-qr-code'
import { createContext, useState } from 'react'

export default function QrisPayment(props) {
    return (
        <>
            <div className={style.containerQris} onClick={() => setQris(false)}>
                <div className={style.qrisPayment}>
                    <h2>Scan Qr terlampir untuk membayar</h2>
                    <QRCode value={props.link} size={250}/>
                    <button>Simpan Qr</button>
                </div>
            </div>
        </>
    )
}