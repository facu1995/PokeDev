import './styles/style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import { MainScreen } from './components/screens/MainScreen';
import { PokemonScreen } from './components/screens/PokemonScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
            <Route path="Main" element={<MainScreen />} />
            <Route path='Pokemon:Id' element={<PokemonScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
