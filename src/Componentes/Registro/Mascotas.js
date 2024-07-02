import React, { useState, useEffect } from "react";
import "./Mascotas.css";
import silueta from "./silueta.jpg";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosConfig";
import Cookies from "js-cookie";

const Mascotas = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    especie: "",
    raza: "",
    edad: "",
    sexo: "",
    //foto: null,
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
      const response = await axiosInstance.post(
        "/api/register-mascota/",
        formData,
        {
          headers: {
            "X-CSRFToken": csrfToken, // Incluye el token CSRF en los headers
          },
        }
      );
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
    <div className="container-m">
      <form onSubmit={handleSubmit}>
        <div className="campos">
          <h1>¡Ahora registra tu(s) mascota(s)!</h1>
          <div className="label-m">
            <label className="Nombre">Nombre:</label>
          </div>
          <div className="box-m">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="label-m">
            <label className="Especie">Especie:</label>
          </div>
          <div className="box-m">
            <select
              name="especie"
              placeholder="Seleccione"
              value={formData.especie}
              onChange={handleChange}
            >
              <option value="perro" onChange={handleChange}>
                Perro
              </option>
              <option value="gato" onChange={handleChange}>
                Gato
              </option>
              <option value="otro" onChange={handleChange}>
                Otro
              </option>
            </select>
          </div>
          <div className="label-m">
            <label className="Raza">Raza:</label>
          </div>
          <div className="box-m">
            <select
              name="raza"
              placeholder="Seleccione"
              value={formData.raza}
              onChange={handleChange}
            >
              <option value="doberman" onChange={handleChange}>
                doberman
              </option>
              <option value="labrador" onChange={handleChange}>
                labrador
              </option>
              <option value="otro" onChange={handleChange}>
                otro
              </option>
            </select>
          </div>
          <div className="label-m">
            <label className="Sexo">Sexo:</label>
          </div>
          <div className="box-m">
            <select
              name="sexo"
              placeholder="Seleccione"
              value={formData.sexo}
              onChange={handleChange}
            >
              <option value="hembra" onChange={handleChange}>
                Hembra
              </option>
              <option value="macho" onChange={handleChange}>
                Macho
              </option>
            </select>
          </div>
          <div className="label-m">
            <label className="Edad">Edad:</label>
          </div>
          <div className="box-m">
            <input
              name="edad"
              type="number"
              placeholder="Edad"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </div>
          <div className="label-m">
            <label className="Personalidad">Personalidad:</label>
          </div>
          <div className="box-m">
            <input
              name="personalidad"
              type="text"
              placeholder="Personalidad"
              required
            />
          </div>
        </div>

        <div className="Imagen">
          <img className="silueta" src={silueta} width="100" height="100" />

          <button
            type="registrarse"
            onClick={() => alert("¡Registro exitoso!")}
          >
            <Link className="registro" to={"/perfil"}>
              Registrarse
            </Link>
          </button>

          <Link className="omitir" to={"/perfil"}>
            Omitir por ahora
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Mascotas;
