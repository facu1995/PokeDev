import './styles/style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
//components
import { MainScreen } from './components/screens/MainScreen';
import { PokemonScreen } from './components/screens/PokemonScreen';
import Nav from './components/nav/nav';
function App() {
  return (
    <>
      
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainScreen />} />
            <Route path="/main" element={<MainScreen />} />
            <Route path='/pokemon/:id' element={<PokemonScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
