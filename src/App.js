import './App.css';
import Loguin from './Componentes/Ingreso/Loguin';
import Mascotas from './Componentes/Registro/Mascotas';
import Propietarios from './Componentes/Registro/Propietarios';
import Perfil from './Componentes/Interfaces/Perfil';
import Matchs from './Componentes/Interfaces/Matchs';
import Chats from './Componentes/Interfaces/Chats';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Loguin/>}/>
          <Route path='/mascotas' element={<Mascotas/>}/>
          <Route path='/propietarios' element={<Propietarios/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/matchs' element={<Matchs/>}/>
          <Route path='/chats' element={<Chats/>}/>
        </Routes>  
      </BrowserRouter>
        
    </div>
  );
}

export default App;
