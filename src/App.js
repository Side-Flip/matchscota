import './App.css';
import Loguin from './Componentes/Ingreso/Loguin';
import Mascotas from './Componentes/Registro/Mascotas';
import Propietarios from './Componentes/Registro/Propietarios';
import Perfil from './Componentes/Interfaces/Perfil';
import Matchs from './Componentes/Interfaces/Matchs';

function App() {
  return (
    <div className="container">
      <Matchs/>
    </div>
  );
}

export default App;
