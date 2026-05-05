import { useContext } from 'react'
import { Routes,Route } from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import Navbar from './pages/Navbar'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'

function App() {
  const user=useContext(UserContext)

  return (
    <>
     <Navbar/>
     <Routes>
        {user?(
            <>
            <Route path='/' element={<HomePage/>}/>
            </>
        ):(
            <Route path='/' element={<LoginPage/>}/>
        )}
        <Route path='sign-up' element={<SignupPage/>}/>
        <Route path='sign-in' element={<LoginPage/>}/>
     </Routes>
    </>
  )
}

export default App
