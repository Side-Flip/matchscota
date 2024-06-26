import React from 'react'
import './Perfil.css';
import Logo from'./Logo.png';

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
          
        </div>
      </div>

      <div className='contenido'>

        <div>
          <h1>¡Tus Mascotas!</h1>
          <div className='listado'>
            
            <div className='mascota'> </div>
          </div>
        </div>

        <div className='menu'>
          
          <div className='btn'>
            <button type='agregar'>Agregar</button>
          </div>
          
          <div className='btn'>
            <button type='chat'>Chats</button>
          </div>
          
          <div className='btn'>
            <button type='match'>Match</button>
          </div>
          
          <div className='btn'>
            <button type='tus-mascotas'>¡Tus Mascotas!</button>
          </div>
          
        </div>
      </div>
      
      

      

    </div>
  )
}

export default Perfil
