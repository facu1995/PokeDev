import './styles/style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//components
import { PokemonScreen } from './components/screens/PokemonScreen';
import Nav from './components/nav/nav_principal';
import { PokemonAllScreen } from './components/screens/PokemonAllScreen'
import {MovimientosAllScreen} from './components/screens/MovimientosAllScreen' //
import { Error504 } from './components/screens/Error504';
import { LoginScreen } from './components/screens/LoginScreen';
function App() {
  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
            <Route path="/home" element={<PokemonAllScreen />} />
            <Route path="/moves" element={<MovimientosAllScreen />} />
            <Route path='/pokemon/:id' element={<PokemonScreen />} />
            <Route path="*" element={<Error504 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
