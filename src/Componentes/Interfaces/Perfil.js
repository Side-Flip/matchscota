import React from 'react'
import './Perfil.css';

const Perfil = () => {
  return (
    <div className='container'>
      
      <div className='listado'>
        <h1> ¡Tus Mascotas! </h1>
        <div className='mascota'>
          
        </div>
      </div>

      <div className='menu'>
        <button type='chat'>Chats</button>
        <button type='match'>Match</button>
        <button type='tus-mascotas'>¡Tus Mascotas!</button>
      </div>
    </div>
  )
}

export default Perfil
