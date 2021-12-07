import './styles/style.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import { MainScreen } from './components/screens/MainScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
            <Route path="Main" element={<MainScreen />} />
            <Route path='Pokemon' element='Coso' />
              <Route path=":Id" element='Coso' />  {/* Modelo para trabajar con useParams, toma datos del Url */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
