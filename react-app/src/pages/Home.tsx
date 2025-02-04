import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Bienvenido a la Encuesta DISC</h1>
      <p>Haz clic en el botón para comenzar la encuesta.</p>
      <Link to="/survey">
        <button>Comenzar Encuesta</button>
      </Link>
    </div>
  );
};

export default Home;