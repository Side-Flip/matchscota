import React from 'react'
import './Matchs.css';
import Logo from'./Logo.png';
import Foto from'./silueta.jpg';

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

export default Matchs
