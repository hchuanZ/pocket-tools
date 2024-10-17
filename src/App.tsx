// import { useState } from 'react'
import { EntryRouteTabBar } from './routes/EntryRouteTabBar'
import { Login } from './routes/Login'
import './App.less'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuthStore } from './store'
import { useEffect } from 'react'

function App() {
  const { initAuthData } = useAuthStore()
  useEffect(() => {
    initAuthData()
  }, [])
  return (
    <Router>
        <div style={{height: '100vh', width: '100%'}}>
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/*" element={<EntryRouteTabBar />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App
