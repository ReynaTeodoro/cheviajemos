import React from 'react';
import { Link } from 'react-router-dom';
import './PublishTrip.css'; // Asegúrate de crear y ajustar este archivo CSS

const PublishTrip = () => {
  return (
    <div className="publish-trip-container">
      <header className="publish-trip-header">
        <Link to="/" className="back-button">
          <i class="bi bi-house-fill"></i>Inicio
        </Link>
        <h2>Publicar Viaje</h2>
        <Link to="/profile" className="profile-button">
          <i className="bi bi-person-fill"></i>
          Perfil
        </Link>
      </header>

      <form className="trip-form">
        <label>Ubicación de Salida</label>
        <input type="text" placeholder="Introduce la ubicación de salida" />

        <label>Ubicación de Llegada</label>
        <input type="text" placeholder="Introduce la ubicación de llegada" />

        <label>Fecha del Viaje</label>
        <input type="date" />

        <label>Hora del Viaje</label>
        <input type="time" />

        <label>Opciones de Ruta</label>
        <div className="map-image">
          <img src="mapa.png" alt="Mapa de ruta" />
        </div>

        <label>Plataformas de Pago</label>
        <div className="payment-options">
          <label>
            <input type="radio" name="payment" value="paypal" /> PayPal
          </label>
          <label>
            <input type="radio" name="payment" value="card" /> Tarjeta
          </label>
        </div>

        <label>Restricciones</label>
        <div className="restrictions-options">
          <label>
            <input type="checkbox" /> Solo Amigos
          </label>
          <label>
            <input type="checkbox" /> No Fumadores
          </label>
        </div>

        <button type="submit" className="publish-button">
          Publicar Viaje
        </button>
      </form>
    </div>
  );
};

export default PublishTrip;
