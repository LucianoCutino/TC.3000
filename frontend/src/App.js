import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import InicioPage from './pages/InicioPage ';
import InstitucionalPage from './pages/InstitucionalPage';
import PilotosPage from './pages/PilotosPage';
import CalendarioPage from './pages/CalendarioPage';
import FotosPage from './pages/FotosPage';
import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Routes>
      
      <Route path="/" element={<InicioPage/>} />
      <Route path="institucional" element={<InstitucionalPage/>} />
      <Route path="pilotos" element={<PilotosPage/>}/>
      <Route path="calendario" element={<CalendarioPage/>} />
      <Route path="fotos" element={<FotosPage/>} />
      <Route path="novedades" element={<NovedadesPage/>} />
      <Route path="contacto" element={<ContactoPage/>} />
      
      </Routes>

      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
