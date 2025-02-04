import React from 'react';
import { calculateResults } from '../../utils/calculateResults';
import { UserSelection } from '../../types/types';
import './Result.css';

interface ResultsProps {
  userSelections: UserSelection[];
  onClose: () => void;
}

const Results: React.FC<ResultsProps> = ({ userSelections, onClose }) => {
  const results = calculateResults(userSelections);

  return (
    <div className="results">
      <h2>Resultados de la Encuesta</h2>
      <div className="results-grid">
        <div className="result-item">
          <div className="shape square">⬜</div>
          <p>Cuadrado: {results.square}</p>
        </div>
        <div className="result-item">
          <div className="shape z">Z</div>
          <p>Z: {results.z}</p>
        </div>
        <div className="result-item">
          <div className="shape triangle">▲</div>
          <p>Triángulo: {results.triangle}</p>
        </div>
        <div className="result-item">
          <div className="shape circle">●</div>
          <p>Círculo: {results.circle}</p>
        </div>
      </div>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Results;