import { Navbar } from "./components/Navbar"
import { Main } from "./components/Main"
import { useState } from "react"
import './App.css'



export function App() {

  const [darkMode, setDarkMode] = useState(true)
    
  function toggleDarkMode() {
      setDarkMode(prevMode => !prevMode)
  }
  
  return (
      <div className="container">
          <Navbar 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode}
          />
          <Main darkMode={darkMode} />
      </div>
  )
}






