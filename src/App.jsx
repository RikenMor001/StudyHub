// im using CONTEXT SWITCHING to avoid prop drilling so my main application is wrapped inside a <ThemeProvider><ThemeProvider/> 

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import { NavBar } from './components/NavBar'
import { ThemeProvider } from './components/theme-provider'
import { HabitBuilder } from './pages/habitBuilder/habitBuilder'
import { Resources } from './pages/resources/resources'
import { StudyTracker } from './pages/studyTracker/studyTracker'

function App() {
  return <div>
    <BrowserRouter>
      <ThemeProvider>
        <div>
          <NavBar/>
          <Routes>
            <Route path='/' element = {<LandingPage/>}/>
            <Route path='/study-tracker' element = {<StudyTracker/>}/>
            <Route path='habit-builder' element = {<HabitBuilder/>}/>
            <Route path='/resources' element={<Resources/>}/>
          </Routes>
        </div>
        </ThemeProvider>
      </BrowserRouter>
  </div>
}

export default App
