import React, { useState, useEffect } from "react";
import "./Propietarios.css";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import Cookies from "js-cookie";

const Propietarios = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    telefono: "",
    email: "",
    contraseña: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCSRFToken = async () => {
      try {
        const response = await axiosInstance.get("/api/get-csrf-token/");
        const csrfToken = response.data.csrfToken;
        Cookies.set("csrftoken", csrfToken); // Guarda el token en las cookies
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCSRFToken();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const csrfToken = Cookies.get("csrftoken"); // Obtén el token CSRF de las cookies
      const response = await axiosInstance.post("/api/register/", formData, {
        headers: {
          "X-CSRFToken": csrfToken, // Incluye el token CSRF en los headers
        },
      });
      if (response.status === 201) {
        alert("¡Registro exitoso!");
        navigate("/mascotas");
      }
    } catch (error) {
      console.error(
        "Error during registration:",
        error.response?.data || error.message
      );
      alert(
        `Hubo un error durante el registro: ${
          error.response?.data?.error || error.message
        }`
      );
    }
  };

  return (
    <div className="container-p">
      <form onSubmit={handleSubmit}>
        <h1>¡REGISTRATE!</h1>
        <div className="label-p">
          <label className="Nombre">Nombre:</label>
          <label className="Apellido">Apellido:</label>
        </div>
        <div className="box-p">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label-p">
          <label className="Documento">N° Documento:</label>
          <label className="Celular">N° Celular:</label>
        </div>
        <div className="box-p">
          <input
            type="number"
            name="documento"
            placeholder="Documento"
            value={formData.documento}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="telefono"
            placeholder="Celular"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label-p">
          <label className="Correo">Correo:</label>
        </div>
        <div className="box-p-c">
          <input
            className="correo"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="label-p">
          <label className="Contraseña">Contraseña:</label>
        </div>
        <div className="box-p-c">
          <input
            type="password"
            name="contraseña"
            placeholder="Contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>

        <button type="button">
          <Link className="atras" to="/">
            Atras
          </Link>
        </button>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Propietarios;
