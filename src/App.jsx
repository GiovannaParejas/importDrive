import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
      </div>
    </BrowserRouter>
  )
}

export default App