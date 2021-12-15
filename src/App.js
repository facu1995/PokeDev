import './styles/style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//components
import { PokemonScreen } from './components/screens/PokemonScreen';
import Nav from './components/nav/nav_principal';
import { PokemonAllScreen } from './components/screens/PokemonAllScreen';
import {MovimientosAllScreen} from './components/screens/MovimientosAllScreen';
import MovimientosScreen from './components/screens/MovimientoScreen';
import { Error504 } from './components/screens/Error504';
import { LoginScreen } from './components/screens/LoginScreen';
import { NewUserScreen } from './components/screens/NewUserScreen';
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route path="/newUser" element={<NewUserScreen />} />
          <Route path="/" element={<LoginScreen />} />
            
            <Route path="/home" element={<PokemonAllScreen />} />
            <Route path='/pokemon/:id' element={<PokemonScreen />} />
            <Route path="/moves" element={<MovimientosAllScreen />} />
            <Route path="/moves/:id" element={<MovimientosScreen />} />
            <Route path="*" element={<Error504 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
