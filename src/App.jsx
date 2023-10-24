import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AttractionsPage from './pages/AttractionsPage'
import TicketPage from './pages/TicketPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/attractions' element={<AttractionsPage/>} />
        <Route path='/tickets' element={<TicketPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
