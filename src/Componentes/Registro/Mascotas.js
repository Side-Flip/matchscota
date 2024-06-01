import React from 'react';
import './Mascotas.css';
import silueta from'./silueta.jpg';

const Mascotas = () => {
  return (
    <div className='container-m'>     

      <div className='campos'>
      <h1>¡Ahora registra tu(s) mascota(s)!</h1>
        <div className='label-m'>
            <label className='Nombre'>Nombre:</label>
        </div>
        <div className='box-m'>
            <input type='text' placeholder='Nombre' required/>
        </div>
        <div className='label-m'>
            <label className='Especie'>Especie:</label>
        </div>
        <div className='box-m'>
            <select> 

            </select>
        </div>
        <div className='label-m'>
            <label className='Raza'>Raza:</label>
        </div>
        <div className='box-m'>
            <select> 

            </select>
        </div>
        <div className='label-m'>
            <label className='Sexo'>Sexo:</label>
        </div>
        <div className='box-m'>
            <select placeholder='Seleccione'> 
                <option>Hembra</option>
                <option>Macho</option>
            </select>
        </div>
        <div className='label-m'>
            <label className='Edad'>Edad:</label>
        </div>
        <div className='box-m'>
            <input type='text' placeholder='Edad' required/>
        </div>
        <div className='label-m'>
            <label className='Personalidad'>Personalidad:</label>
        </div>
        <div className='box-m'>
            <input type='text' placeholder='Personalidad' required/>
        </div>
      </div>

      <div className='Imagen'>
        <img className='silueta' src={silueta} width="100" height="100" />

        <button type='registrarse'>Registrar</button>
        
        <a href='#'>Omitir por ahora</a>

      </div>
    </div>
  )
}

export default Mascotas
