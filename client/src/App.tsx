import { Routes, Route} from 'react-router-dom';
import { Bottom } from './components/layout/BottomNav';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Route Switcher: Only one route renders at a time */}
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/perfil' element={<Profile />} />       
        </Routes>
      </main>
      <Bottom/>
    </div>   
  )
}

export default App;
