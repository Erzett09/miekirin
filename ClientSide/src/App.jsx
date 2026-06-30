
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/landingPage'
import RegisterPage from './pages/Authentication/Register'
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route  path='/register' element={<RegisterPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
