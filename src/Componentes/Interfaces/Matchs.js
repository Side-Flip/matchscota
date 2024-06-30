import React from 'react'
import './Matchs.css';
import Logo from'./Logo.png';
import Foto from'./silueta.jpg';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

const Matchs = () => {
  return (
    <div className='container'>

      <div className='estado'>

        <div className='busqueda'>
          
          <div className='buscar'>
            <input type='buscar' placeholder='Buscar'/>
          </div>

          <div className='filtro'>

            <select> 
              <option selected value="especie">Especie</option>
            </select>
            <select> 
              <option selected value="raza">Raza</option>
            </select>
            <select> 
              <option selected value="edad">Edad</option>
            </select>
            <select> 
              <option selected value="sexo">Sexo</option>
            </select>

          </div>
        </div>

        <div className='usuario'>
          <div className='logo'>
            <img className='logo' src={Logo} />
          </div>
          
          <div className='nombre'>
           <label >José Luis</label>
          </div>

          <div className='salir'>
            <Link className='logout' to={'/'}><FiLogOut/></Link>
          </div>
          
        </div>

      </div>

      <div className='contenido_m'>

        <div>

          <div className='listado_m'>
            
            <div className='mascota_m'> 

              <div className='foto_m'> 
                <img className='foto_m' src={Foto} />
              </div>

              <div className='datos_m'>
                <label className='nombre'>Nombre</label>
                <label className='especie'>Especie</label>
                <label className='sexo'>Sexo</label>
              </div>

              <div className='enlaces_m'>
                <a href='ubicacion'>En Giron</a>
                <a href='ver'>Ver Detalles</a>
                <a href='match'>MATCH</a>
              </div>
              
            </div>

          </div>
        </div>

        <div className='menu_m'>
          
          <div className='seleccion'>
          <select> 
            <option selected value="seleccione">Seleccione su mascota</option>
          </select>
          </div>
          
          <div className='btn'>
            <button type='chat'>
              <Link className='chats' to={'/chats'}>Chats</Link>  
            </button>
          </div>
          
          <div className='btn'>
            <button className='match' type='match'>Match</button>
          </div>
          
          <div className='btn'>
            <button type='tus-mascotas'>
              <Link className='mascotas' to={'/perfil'}>¡Tus Mascotas!</Link>
            </button>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Matchs
