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

      <div className='todo'>
        <h1>¡Tus Chats!</h1>
        <div className='lista'>

          <div className='lista_m'>
            <div className='mascota'> 

              <div className='foto'> 
                <img className='foto' src={Foto} />
              </div>

              <div className='datos'>
                <label className='nombre_d'>Nombre dueño</label>
                <label className='propietario'>propietario de: </label>
              </div>

            </div>

            <div className='mascota'> 

              <div className='foto'> 
                <img className='foto' src={Foto} />
              </div>

              <div className='datos'>
                <label className='nombre_d'>Nombre dueño</label>
                <label className='propietario'>propietario de: </label>
              </div>

            </div>

            <div className='mascota'> 

              <div className='foto'> 
                <img className='foto' src={Foto} />
              </div>

              <div className='datos'>
                <label className='nombre_d'>Nombre dueño</label>
                <label className='propietario'>propietario de: </label>
              </div>

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
              <div className='conversacion'></div>
              
            </div>

            <div className='enviar_mensaje'>
              <input type='text' placeholder='Escribe un mensaje'/>
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
