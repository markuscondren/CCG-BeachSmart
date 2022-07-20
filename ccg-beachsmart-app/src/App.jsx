import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/Navbar.jsx'
import './components/Map.jsx'
import './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Map />
      <Footer />
    </div>
  )
}

export default App
