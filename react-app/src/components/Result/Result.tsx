// ------ src/components/Result/Result.tsx ------
import React from 'react';
import { calculateResults } from '../../utils/calculateResults';
import { UserSelection, Question } from '../../types/types';
import './Result.css';

interface ResultsProps {
  userSelections: UserSelection[];
  questions: Question[];
  onClose: () => void;
}

const Results: React.FC<ResultsProps> = ({ userSelections, questions, onClose }) => {
  const results = calculateResults(userSelections, questions);
  
  // Datos para la tabla
  const tableData = [
    { shape: 'Z', symbol: 'Z', ...results.z },
    { shape: 'Cuadrado', symbol: '⬜', ...results.square },
    { shape: 'Triángulo', symbol: '▲', ...results.triangle },
    { shape: 'Círculo', symbol: '●', ...results.circle }
  ];

  return (
    <div className="results">
      <h2>Resultados de la Encuesta</h2>
      
      <table className="results-table">
        <thead>
          <tr>
            <th>Figura</th>
            <th>+</th>
            <th>-</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="shape-header">
                <div className={`shape ${item.shape.toLowerCase()}`}>
                  {item.symbol} {item.shape}
                </div>
              </td>
              <td>{item.positive}</td>
              <td>{item.negative}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default Results;