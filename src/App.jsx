// im using CONTEXT SWITCHING to avoid prop drilling so my main application is wrapped inside a <ThemeProvider><ThemeProvider/> 

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/navbar'
import { ThemeProvider } from './components/theme-provider'
import LandingPage from './pages/LandingPage'

function App() {
  return <div>
    <BrowserRouter>
      <ThemeProvider>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<LandingPage/>}/>
          </Routes>
        </div>
        </ThemeProvider>
      </BrowserRouter>
  </div>
}

export default App
