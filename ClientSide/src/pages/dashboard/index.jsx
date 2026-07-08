
import { useState,useRef, useEffect } from "react"
import style from  '../../assets/css/dashboard/main.module.css'
import Miekirin from '../../assets/images/chickennoodle.png'
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import Notification from "../../Components/Notification"
import MiekirinPedasNikmat from '../../assets/images/miekirin_pedas_nikmat.jpg'
import MiekirinAyamGeprek from '../../assets/images/miekirin-ayam-geprek.jpg'

export default function Dashboard() {
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    const loadingName = useRef(null)
    const [products,setProducts] = useState([])
    useEffect(() => {
        const CheckAuthenthication = async () => {
            console.log(cart)
            const token = localStorage.getItem('auth_token')

            if(!token) {
                return window.location.href = '/login'
            }

            if(token) {

                try {

                    const productResponse = await axios.get('http://127.0.0.1:8000/api/products',
                        {
                            headers : {
                                Authorization : `Bearer ${token}`
                            }
                        }
                    )

                    setProducts(productResponse.data.data.map(item => ({...item,quantity:0})))
                    console.log(products)
                    
                    
                    const response = await axios.get('http://127.0.0.1:8000/api/user',{
                        headers : {
                            Authorization : `Bearer ${token}`
                        }
                    })



                    const result =  response.data
                    setUser(result.data)
                    loadingName.current.innerHTML = `${user.name}`
                } catch (error) {
                    if(error.response?.status == 401) {
                        localStorage.removeItem('auth_token')
                        localStorage.removeItem('user')
                        navigate('/login')
                    }
                }


            }

            setUser(JSON.parse(localStorage.getItem('user')))
        }
        
        CheckAuthenthication()
    }, [navigate])

    
    const [sidebar,setSidebar] = useState(true)
    const [cartmenu,setCartMenu] = useState(false)
    const [cart,setCart] = useState([])
    

    const [notifications, setNotifications] = useState([]);


    function addToCart(index) {
        const product = products[index]

        setCart(prev => {
            const existing = prev.find(item => item.id == product.id)

            if (existing) {
                return prev.map(item => 
                    item.id === product.id 
                    ? 
                    {...item
                        ,quantity: item.quantity++}
                        : item
                )
            }
            return [...prev,{...product,quantity: +1}]
        })
        
        
        // console.log(cart)
        showNotification('Berhasil tambah ke keranjang')
    }

    function showNotification(message, type = 'success') {
        const id = Date.now();

        const newNotif = {
            id,
            message,
            type
        };

        setNotifications(prev => [...prev, newNotif]);
        // alert(id)
        setTimeout(() => {
        setNotifications(prev =>
            prev.filter(notif => notif.id !== id)
        );
        }, 3000);
    }


    function deleteItem(index) {
        setCart(prev => prev.filter((_,i) => i !== index))
    }

    function reduceQty(index) {
        setCart(prev => prev.flatMap((item,i) => {
            if(i !== index) return item

            if(item.quantity > 0    ) {
                return {
                    ...item,quantity: item.quantity --
                }
            }

            return []
        }))
    }

    function addQty(index) {
        setCart(prev => prev.flatMap((item,i) => {
            if(i !== index) return item;

            return {...item,quantity:item.quantity++}
        }))
    }

    function checkOut() {}



    return (
        <>
            <div className={style.dashboard}>
                <div className={style.notificationContainer}>
                    {notifications.map(notif => (
                    <div key={notif.id} className={`${style.notification} ${style[notif.type]}`}>
                    {notif.message}
                </div>
    ))}
            </div>
                <div className={`${style.sidebar} ${sidebar ? style.active : style.closed}`}>
                    <h2 className={style['toggle-button']} onClick={() => setSidebar(!sidebar)}>⬅️</h2>
                    <h2>{user?.name}</h2>

                    <div className={style.menu}>
                        <ul>
                            <li>
                                Home
                            </li>
                            <li>
                                profile
                            </li>
                            <li>
                                my order
                            </li>
                            <li>
                                my cart    
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style['main-content']}>
                    <div className={`${style.navbar} ${sidebar ? style.active : style.closed}`}>
                        {!sidebar && (
                            <div className={style['toggle-button']} onClick={() => setSidebar(!sidebar)}>
                        ☰
                    </div>
                    )}

                    <div className={style['search-engine']}>
                        <input type="text" name="search" id="search" placeholder="Miekirin" className={style.search} />
                        <button>Search</button>
                    </div>
                    </div>
                    
                    <div className={style['container-menu']}>

                        {products.map((item,index) => {
                            return (

                                <div className={style['wrapper-card']}>
                            <div className={style['card-image']}>
                                <img src={item.image} alt="Card Image"/>
                                {console.log(item.image)}
                            </div>

                            <div className={style['card-title']}>
                                <h3>{item.name}</h3>
                            </div>

                            <div className={style['card-description']}>
                                {item.description}
                            </div>

                            <div className={style.cardPrice}>
                                {item.price}
                            </div>

                            <div className={style['card-footer']}>
                                <button className={style['add-to-cart-button']}
                                onClick={() => {addToCart(index)}}
                                >masukan ke keranjang</button>
                                <button className={style['order-button']}>pesan</button>
                            </div>
                        </div>
                            )
                        })}

                        {/* <div className={style['wrapper-card']}>
                            <div className={style['card-image']}>
                                <img src="https://images.unsplash.com/photo-1682685794700-1f3e7c5d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card Image"/>
                            </div>

                            <div className={style['card-title']}>
                                <h3>Card Title</h3>
                            </div>

                            <div className={style['card-description']}>
                                This is a simple card description.
                            </div>

                            <div className={style['card-footer']}>
                                <button className={style['add-to-cart-button']}>masukan ke keranjang</button>
                                <button className={style['order-button']}>pesan</button>
                            </div>      
                        </div> */}
                        {/* <div className={style['wrapper-card']}>
                            <div className={style['card-image']}>
                                <img src="https://images.unsplash.com/photo-1682685794700-1f3e7c5d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card Image"/>
                            </div>

                            <div className={style['card-title']}>
                                <h3>Card Title</h3>
                            </div>

                            <div className={style['card-description']}>
                                This is a simple card description.
                            </div>

                            <div className={style['card-footer']}>
                                <button className={style['add-to-cart-button']}>masukan ke keranjang</button>
                                <button className={style['order-button']}>pesan</button>
                            </div>
                        </div>
                        <div className={style['wrapper-card']}>
                            <div className={style['card-image']}>
                                <img src="https://images.unsplash.com/photo-1682685794700-1f3e7c5d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Card Image"/>
                            </div>

                            <div className={style['card-title']}>
                                <h3>Card Title</h3>
                            </div>

                            <div className={style['card-description']}>
                                This is a simple card description.
                            </div>

                            <div className={style['card-footer']}>
                                <button className={style['add-to-cart-button']}>masukan ke keranjang</button>
                                <button className={style['order-button']}>pesan</button>
                            </div>
                        </div> */}
                    </div>

                    <div className={style.cartButton} onClick={() => setCartMenu(!cartmenu)}>
                        🛒
                        {cart.length > 0 && (
                            <span className={style.cartBadge}>
                                {cart.length}
                            </span>
                        )}
                    </div>
                </div>

                <div className={`${style.ContainerCart} ${cartmenu ? style.active : style.closed}`}>
                            <div className={style.closeButton} onClick={() => setCartMenu(!cartmenu)}>
                                ✖️
                            </div>
                    <h1>Keranjang</h1>
                    <h2>Barang saya</h2>
                        <div className={style.cartProduct}>
                    <div className={style.productCart}>
                        {cart.length === 0 && (
                            <b className={style.noProductText}>tidak ada barang di keranjang</b>
                        )}
                        {cart?.map((item,index) => {
                            return (
                                <div className={style.item}>

                                <li key={item.index}>{index +1}. {item.name}</li>
                                <div className={style.qtyText}> <button className={style.reduceQtyButton} onClick={() => {reduceQty(index)}}>-</button>qty : {item.quantity} <button className={style.addQtyButton} onClick={() => addQty(index)}>+</button>
                                    <div className={style.deleteItemButton} onClick={() => deleteItem(index)}>X</div></div>
                                
                                </div>
                                
                            )
                        })}
                    </div>
                        </div>

                        <div className={style.orderButton}>
                            Pesan sekarang
                        </div>
                </div>
            </div>
        </>
    )
}