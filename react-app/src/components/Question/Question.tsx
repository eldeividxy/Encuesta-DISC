// src/components/Question/Question.tsx
import React, { useState, useEffect } from 'react';
import { Question, UserSelection, Shape } from '../../types/types';
import './Question.css';

interface QuestionProps {
  question: Question;
  onSelect: (selection: UserSelection) => void;
  error?: string;
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onSelect, error }) => {
  const [plusSelectedId, setPlusSelectedId] = useState<number | null>(null);
  const [minusSelectedId, setMinusSelectedId] = useState<number | null>(null);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    if (plusSelectedId !== null && minusSelectedId !== null) {
      const plusOption = question.options.find(opt => opt.id === plusSelectedId);
      const minusOption = question.options.find(opt => opt.id === minusSelectedId);
  
      if (!plusOption || !minusOption) return;
  
      // Validar solo si ambos no son "N"
      if (plusOption.plusValue !== "N" && 
          minusOption.minusValue !== "N" && 
          plusOption.plusValue === minusOption.minusValue) {
        setLocalError('No puedes seleccionar la misma opción en "+" y "-"');
        return;
      }
  
      setLocalError(null);
    }
  }, [plusSelectedId, minusSelectedId]);

  const handlePlusSelect = (optionId: number) => {
    setPlusSelectedId(optionId);
    onSelect({
      questionId: question.id,
      plusOptionId: optionId,
      minusOptionId: minusSelectedId || -1
    });
  };

  const handleMinusSelect = (optionId: number) => {
    setMinusSelectedId(optionId);
    onSelect({
      questionId: question.id,
      plusOptionId: plusSelectedId || -1,
      minusOptionId: optionId
    });
  };

  return (
    <div className={`question ${error ? 'error' : ''}`}>
      <h3>{question.text}</h3>
      <div className="options">
        {/* Renderizado de opciones + */}
        <div className="plus-options">
          <h4>➕ Mejor descripción</h4>
          {question.options.map((option) => (
            <button
            onClick={() => handlePlusSelect(option.id)}
            className={plusSelectedId === option.id ? 'selected' : ''}
            disabled={minusSelectedId === option.id}
          >
            {option.text}
          </button>
          ))}
        </div>
        
        {/* Renderizado de opciones - */}
        <div className="minus-options">
          <h4>➖ Menos descripción</h4>
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleMinusSelect(option.id)}
              className={minusSelectedId === option.id ? 'selected' : ''}
              disabled={
                option.minusValue !== "N" && 
                !!plusSelectedId && 
                option.minusValue === question.options.find(opt => opt.id === plusSelectedId)?.plusValue
              }
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      {(localError || error) && <p className="error-message">{localError || error}</p>}
    </div>
  );
};


export default QuestionComponent;