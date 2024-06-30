import React from 'react';
import './Perfil.css';
import Logo from'./Logo.png';
import Foto from'./silueta.jpg';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

const Perfil = () => {
  return (
    <div className='container'>

      <div className='estado'>

        <div className='busqueda'>
          
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

      <div className='contenido_p'>

        <div>
          <h1>¡Tus Mascotas!</h1>
          <div className='listado_p'>
            
            <div className='mascota_p'> 

              <div className='foto_p'> 
                <img className='foto_p' src={Foto} />
              </div>

              <div className='datos_p'>
                <label className='nombre'>Nombre</label>
                <label className='especie'>Especie</label>
                <label className='sexo'>Sexo</label>
              </div>

              <div className='enlaces_p'>
                <a href='editar'>Editar información</a>
                <a href='ver'>Ver Detalles</a>
                <a href='match'>MATCH</a>
              </div>
              
            </div>

          </div>
        </div>

        <div className='menu_p'>
          
          <div className='btn'>
            <button type='agregar'>
              <Link className='agregar' to={'/mascotas'}>Agregar</Link> 
            </button>
          </div>
          
          <div className='btn'>
            <button type='chat'>
              <Link className='chats' to={'/chats'}>Chats</Link>   
            </button>
          </div>
          
          <div className='btn'>
            <button type='match'>
              <Link className='match' to={'/matchs'}>Match</Link> 
            </button>
          </div>
          
          <div className='btn'>
            <button className='mascotas' type='tus-mascotas'>¡Tus Mascotas!</button>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Perfil
