// im using CONTEXT SWITCHING to avoid prop drilling so my main application is wrapped inside a <ThemeProvider><ThemeProvider/> 

import './App.css'
import { NavBar } from './components/navbar'
import { ThemeProvider } from './components/theme-provider'

function App() {
  return <div>
    <ThemeProvider>
      <NavBar/>
    </ThemeProvider>
  </div>
}

export default App
