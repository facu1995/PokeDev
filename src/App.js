import './styles/style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//components
import { MainScreen } from './components/screens/MainScreen';
import { PokemonScreen } from './components/screens/PokemonScreen';
import Nav from './components/nav/nav_principal';
import { PokemonAllScreen } from './components/screens/PokemonAllScreen'
import {MovimientosAllScreen} from './components/screens/MovimientosAllScreen' //
import { Error504 } from './components/screens/Error504';
function App() {
  return (
    <>
      
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainScreen />} />
            <Route path="/main" element={<MainScreen />} />
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
