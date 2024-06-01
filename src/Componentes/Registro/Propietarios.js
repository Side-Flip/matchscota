import React from 'react'
import './Propietarios.css'

const Propietarios = () => {
  return (
    <div className='container-p'>
       <form action=''> 
            <h1>¡REGISTRATE!</h1>
            <div className='label-p'>
                <label className='Nommbre'>Nombre:</label>
                <label className='Apellido'>Apellido:</label>
            </div>
            <div className='box-p'>
                <input type='text' placeholder='Nombre' required/>
                <input type='text' placeholder='Apellido' required/>
            </div>

            <div className='label-p'>
                <label className='Documento'>N° Documento:</label>
                <label className='Celular'>N° Celular:</label>
            </div>
            <div className='box-p'>
                <input type='number' placeholder='Documento' required/>
                <input type='number' placeholder='Celular' required/>
            </div>
            <div className='label-p'>
                <label className='Correo'>Correo:</label>
            </div>
            <div className='box-p-c'>
                <input className='correo' type='text' placeholder='Correo elctrónico' required/>
            </div>
    
            <button type='registrarse'>Registrarse</button>
            </form>
    </div>
  )
}

export default Propietarios
