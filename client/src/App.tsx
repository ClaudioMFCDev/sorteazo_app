import { Routes, Route} from 'react-router-dom';
import { Bottom } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { CreateRaffle } from './pages/CreateRaffle';
import { MyRaffles } from './pages/MyRaffles';
import { RaffleDetail } from './pages/RaffleDetail';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Route Switcher: Only one route renders at a time */}
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/raffle/:id' element={<RaffleDetail/>}/>
          <Route path='/perfil' element={<Profile />} />
          <Route path='/crear' element={<CreateRaffle />} />    
          <Route path='/mis-rifas' element={<MyRaffles />} />    
        </Routes>
      </main>
      <Bottom/>
    </div>   
  )
}

export default App;
