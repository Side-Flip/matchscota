import React from 'react'
import './Chats.css';
import Logo from'./Logo.png';
import Foto from'./silueta.jpg';

const Chats = () => {
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
        <h1>¡Tus Chats!</h1>
        <div className='listado'>
          
          <div className='mascota'> 

            <div className='foto'> 
              <img className='foto' src={Foto} />
            </div>

            <div className='datos'>
              <label className='nombre'>Nombre</label>
              <label className='especie'>Especie</label>
              <label className='sexo'>Sexo</label>
            </div>

            <div className='enlaces'>
              <a href='editar'>Editar información</a>
              <a href='ver'>Ver Detalles</a>
              <a href='match'>MATCH</a>
            </div>

          </div>

          <div className='mensajes'>
              
            <div className='dueño'>

              <div className='d_logo'>
                <img className='d_logo' src={Logo} />
              </div>
              
              <div className='d_nombre'>
                <label >José Luis</label>
              </div>

            </div>

            <div className='chat'>

            </div>


            </div>

        </div>
    </div>

      <div className='menu'>
        
        <div className='btn1'>
          
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

export default Chats
