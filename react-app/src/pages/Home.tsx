import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="home" style={{ textAlign: 'center' }}>
      <img 
        src="/logoDisc.jpeg"  
        style={{ 
          width: '300px', 
          height: 'auto',
          margin: '20px 0'
        }}
      />
      <p>Haz clic en el botón para comenzar la encuesta.</p>
      <Link to="/survey">
        <button style={{ padding: '10px 20px', fontSize: '1.1rem' }}>
          Comenzar Encuesta
        </button>
      </Link>
    </div>
  );
};

export default Home;