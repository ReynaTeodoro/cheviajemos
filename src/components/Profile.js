import React from 'react';
import './Profile.css'; // Asegúrate de importar el archivo CSS

const Profile = () => {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <div className="logo">
          <i className="bi bi-car-front-fill logo-icon" />{' '}
          {/* Icono de coche */}
          <span className="logo-text">Che</span>
          <span className="logo-highlight">Viajemos</span>
        </div>
        <nav>
          <a href="/">Inicio</a>
          <a href="/publish">Publicar Viaje</a>
        </nav>
      </header>

      <div className="profile-content">
        <div className="profile-info">
          <img src="profile1.jpg" alt="Perfil" className="profile-picture" />
          <h2>Juan Pérez</h2>
          <p>juan.perez@example.com</p>
          <button className="edit-button">Editar Perfil</button>
        </div>

        <section className="shared-routes">
          <h3>Rutas Compartidas</h3>
          <div className="route-card">
            <p>
              <strong>Ruta:</strong> Centro a Norte
            </p>
            <p>
              <strong>Fecha:</strong> 12/11/2023
            </p>
            <button className="details-button">Detalles</button>
          </div>
          <div className="route-card">
            <p>
              <strong>Ruta:</strong> Este a Oeste
            </p>
            <p>
              <strong>Fecha:</strong> 15/11/2023
            </p>
            <button className="details-button">Detalles</button>
          </div>
        </section>

        <section className="reviews">
          <h3>Valoraciones</h3>
          <section className="review">
            <img
              src="profile7.jpg"
              alt="María Sánchez"
              className="review-picture"
            />
            <div className="review-details">
              <span className="review-name">María Sánchez</span>
              <span className="stars">★★★★☆</span>
            </div>
          </section>
          <section className="review">
            <img
              src="profile5.jpg"
              alt="Carlos Gómez"
              className="review-picture"
            />
            <div className="review-details">
              <span className="review-name">Carlos Gómez</span>
              <span className="stars">★★★★☆</span>
            </div>
          </section>
        </section>

        <section className="payment-preference">
          <h3>Preferencias de Pago</h3>
          <p>
            <strong>Método Actual:</strong> Tarjeta de Crédito
          </p>
          <button className="change-method-button">Cambiar Método</button>
        </section>
      </div>

      <footer className="profile-footer">
        <a href="/">Inicio</a>
        <a href="/publish">Publicar</a>
        <a href="/profile">Config</a>
      </footer>
    </div>
  );
};

export default Profile;
