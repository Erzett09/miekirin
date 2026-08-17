
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/landingPage'
import RegisterPage from './pages/Authentication/Register'
import LoginPage from './pages/Authentication/Login'
import Dashboard from './pages/dashboard'
import DashboardOrders from './pages/dashboard/order'
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route  path='/register' element={<RegisterPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/dashboard/mycart/:id' element={<DashboardOrders/>}/>
      </Routes>
    </Router>
  )
}

export default App
