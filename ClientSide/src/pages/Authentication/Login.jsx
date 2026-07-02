import '../../assets/css/login.css';
import LoginLogo from '../../assets/images/logo-loginn.png';
import Notification from '../../Components/Notification';
import { Login } from '../../config/services';
import { useState } from 'react';
// import Notification from '../../Components/Notification';

export default function LoginPage() {
  const [notification, setNotification] = useState(null);

  const HandleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email : document.getElementById('email').value,
        password : document.getElementById('password').value
      }
      const result = await Login(data)
      setNotification({
        Logo : 'success',
        message : result.data.message})
    } catch (error) {
      setNotification({
        Logo : 'error',
        message : error.response.data.message
      })
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

            <button type="submit" className="submit-button">
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