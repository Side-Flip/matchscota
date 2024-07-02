import React from 'react'
import './Chats.css';
import Logo from'./Logo.png';
import Foto from'./silueta.jpg';
import { Link} from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

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

          <div className='salir'>
            <Link className='logout' to={'/'}><FiLogOut/></Link>
          
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
          <button className='chats' type='chat'>Chats</button>
        </div>
        
        <div className='btn'>
          <button type='match'>
            <Link className='match' to={'/matchs'}>Match</Link> 
          </button>
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

export default Chats
