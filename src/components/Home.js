import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <i className="bi bi-car-front-fill logo-icon" />{' '}
            {/* Icono de coche */}
            <span className="logo-text">Che</span>
            <span className="logo-highlight">Viajemos</span>
          </div>
        </div>
        <div className="header-icons">
          <i className="bi bi-bell" /> {/* Icono de campana */}
          <i
            className="bi bi-person-fill"
            onClick={() => navigate('/profile')}
          ></i>
        </div>
      </header>

      <div className="role-selector">
        <button className="role-button selected">Soy Pasajero</button>
        <button className="role-button">Soy Conductor</button>
      </div>

      <div className="options">
        <button className="option-button" onClick={() => navigate('/publish')}>
          Publicar Viaje
        </button>
        <button
          className="option-button"
          // onClick={() => navigate('/ver-viajes')}
        >
          Ver Viajes Disponibles
        </button>
        <button className="option-button" onClick={() => navigate('/profile')}>
          Acceder al Perfil
        </button>
      </div>

      <footer className="footer">
        <i className="footer-icon icon-home" />
        <i className="footer-icon icon-travel" />
        <i className="footer-icon icon-profile" />
      </footer>
    </div>
  );
}

export default Home;
