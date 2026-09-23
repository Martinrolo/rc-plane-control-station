import './css/App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from '@/components/ui/NavBar'
import FlightNavigation from './pages/FlightNavigation'
import Home from './pages/Home'

function App() {

  return (
      <div>
        <NavBar/>
        <main className='main-content'>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/flightnavigation" element={<FlightNavigation/>}/>
          </Routes>
        </main>
      </div>

  )
}

export default App
