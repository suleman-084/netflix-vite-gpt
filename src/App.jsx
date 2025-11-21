import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Tailwind Background Test ✔️
      </h1>
    </div>
  )
}

export default App
