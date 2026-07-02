import '../assets/css/modal.css'
import { createContext , useRef} from 'react'
export default function Modal(props) {
    const ModalContainer = useRef(null) ;
    return (
        <>


                <div className="wrapper-modal" ref={ModalContainer}>
                    <div className="modal">
                        <div className="modal-header">
                            <h2 className="title">{props.title?? 'JUDUL'}</h2>
                        </div>

                        <div className="modal-content">
                            <p className="content">{props.content?? 'halo, ini adalah isi dari modal konten'}</p>
                        </div>

                        <div className="modal-footer">
                            <div className="close-button" onClick={() => {props.setModal(false)}}>Tutup</div>
                        </div>
                    </div>
                </div>

        </>
    )
}