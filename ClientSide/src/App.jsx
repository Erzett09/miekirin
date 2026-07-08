
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/landingPage'
import RegisterPage from './pages/Authentication/Register'
import LoginPage from './pages/Authentication/Login'
import Dashboard from './pages/dashboard'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route  path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
  )
}

export default App
