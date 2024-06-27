import './App.css';
import Loguin from './Componentes/Ingreso/Loguin';
import Mascotas from './Componentes/Registro/Mascotas';
import Propietarios from './Componentes/Registro/Propietarios';
import Perfil from './Componentes/Interfaces/Perfil';
import Matchs from './Componentes/Interfaces/Matchs';
import Chats from './Componentes/Interfaces/Chats';

function App() {
  return (
    <div className="container">
      <Chats/>
    </div>
  );
}

export default App;
