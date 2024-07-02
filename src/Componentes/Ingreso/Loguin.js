import React, { useState } from "react";
import "./Loguin.css";
import { FaUserCircle, FaLock } from "react-icons/fa";
import Inicio from "./Inicio.jpg";
import Logo from "./Logo.png";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";

const Loguin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "api/login/",
        {
          name,
          password,
        },
        {
          withCredentials: true,
        }
      );
      setMessage(response.data.message);
      if (response.status === 200) {
        navigate("/perfil");
      }
    } catch (error) {
      setMessage("Login failed");
    }
  };

  return (
    <div className="general">
      <div className="img">
        <img className="inicio" src={Inicio} />
      </div>
      <div className="contenedor">
        <form action="" onSubmit={handleSubmit}>
          <img className="logo" src={Logo} />

          <h1>¡Bienvenidos a MATCHSCOTA!</h1>
          <div className="label">
            <label className="label-usuario">Usuario:</label>
          </div>
          <div className="box">
            <input
              type="text"
              placeholder="Usuario"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <FaUserCircle />
          </div>
          <div className="label">
            <label className="label-contrasena">Contraseña:</label>
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Contrasena"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <FaLock />
          </div>
          <div className="recordar-contrasena">
            <a href="#">¿Olvidó su contraseña?</a>
          </div>
          <button type="submit">Ingresar</button>
          <button type="registrarse">
            {" "}
            <Link className="registro" to={"/propietarios"}>
              Registrarse
            </Link>{" "}
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Loguin;
