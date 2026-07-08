import '../../assets/css/login.css';
import LoginLogo from '../../assets/images/logo-loginn.png';
import Notification from '../../Components/Notification';
import { Login } from '../../config/services';
import { useState,useRef } from 'react';
// import Notification from '../../Components/Notification';

export default function LoginPage() {
  const [notification, setNotification] = useState(null);
  const submitButtonRef = useRef(null);
  const HandleLogin = async (e) => {
    e.preventDefault();
    submitButtonRef.current.disabled = true;
    submitButtonRef.current.innerHTML = 'Loading...';
    try {
      const data = {
        email : document.getElementById('email').value,
        password : document.getElementById('password').value
      }
      const result = await Login(data)
      setNotification({
        Logo : 'success',
        message : result.data.message})
        localStorage.setItem('auth_token',result.token)
        localStorage.setItem('user',JSON.stringify(result.data))
        submitButtonRef.current.disabled = false;
        submitButtonRef.current.innerHTML = 'Masuk';
        window.location.href = '/dashboard';
        setTimeout(() => {
          setNotification(null)
        })
    } catch (error) {
      setNotification({
        Logo : 'error',
        message : error.response.data.message
      })

      submitButtonRef.current.disabled = false;
      submitButtonRef.current.innerHTML = 'Masuk';

      setTimeout(() => {
        setNotification(null)
      }, 2400)
    }
  }

  return (
    <>
    <div className="container-login">
    {notification && (
      <Notification logo={notification.Logo} message={notification.message}/>
    )}  
        <div className="circle">Miekirin</div>
      <div className="wrapper-image">
        <img src={LoginLogo} alt="Login Logo" className="logo" />
      </div>

      <div className="wrapper-login">
        <div className="login">
          <h2>Miekirin</h2>

          <form className="form-login" onSubmit={HandleLogin}>
            <div className="wrapper-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Masukkan email"
                name='email'
              />
            </div>

            <div className="wrapper-field">
              <label htmlFor="password">Kata Sandi</label>
              <input
                type="password"
                id="password"
                placeholder="Masukkan kata sandi"
                name='password'
              />
            </div>

            <button ref={submitButtonRef} type="submit" className="submit-button">
              Masuk
            </button>
          </form>

          <p>
            Belum punya akun? <a href="/register">Daftar di sini</a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}