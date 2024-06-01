import React from 'react';
import './Loguin.css';
import { FaUserCircle, FaLock } from "react-icons/fa";
import Inicio from'./Inicio.jpg';
import Logo from'./Logo.png';

const Loguin = () => {
  return (
    
    <div className='general'>
        <div className='img'>
            <img className='inicio' src={Inicio} />
        </div>
        <div className='contenedor'>
                
            <form action=''> 
                <img className='logo' src={Logo} />

                <h1>¡Bienvenidos a MATCHSCOTA!</h1>
                <div className='label'>
                    <label className='label-usuario'>Usuario:</label>
                </div>
                <div className='box'>
                    <input type='text' placeholder='Usiario' required/>
                    <FaUserCircle />
                </div>
                <div className='label'>
                    <label className='label-contrasena'>Contraseña:</label>
                </div>
                <div className='box'>
                    <input type='password' placeholder='Contrasena' required/>
                    <FaLock />
                </div>
                <div className='recordar-contrasena'>
                    <a href='#'>¿Olvidó su contraseña?</a>
                </div>
                <button type='entrar'>Ingresar</button>
        
                <button type='registrarse'>Registrarse</button>
            </form>
        </div>
    </div>
  );
};

export default Loguin;


