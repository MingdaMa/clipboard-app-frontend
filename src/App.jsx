import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import { loginService } from './api/index'
import Home from './view/Home'
import Login from './view/Login'
import OAuth2RedirectHandler from './components/OAuth2RedirectHandler';


const App = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const getCurrentUser = async () => {
    try {
      const res = await loginService.getCurrentUser()
      if (res !== 'No access token set.') {
        setCurrentUser(res)
        setAuthenticated(true)
        setLoading(false)
        localStorage.setItem('userId', res.id)
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCurrentUser()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home authenticated={authenticated} currentUser={currentUser}/>} />
      <Route path="/login" element={<Login authenticated={authenticated}/>} />
      <Route path='/oauth2/redirect' element={<OAuth2RedirectHandler/>}/>
    </Routes>
  )
}

export default App
