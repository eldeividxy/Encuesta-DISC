// File: src/components/Question/Question.tsx
import React, { useState } from 'react';
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

  const handlePlusSelect = (optionId: number, value: Shape | "N") => {
    if (value === "N") return; // Ignorar "N"
    setPlusSelectedId(optionId);
    onSelect({
      questionId: question.id,
      plus: value, // TypeScript ahora sabe que value es Shape
      minus: "square" // Valor por defecto seguro
    });
  };
  
 

  const handleMinusSelect = (optionId: number, value: Shape | "N") => {
    if (value === "N") return; // Ignorar opciones con "N"
    setMinusSelectedId(optionId);
    onSelect({
      questionId: question.id,
      plus: question.options.find(opt => opt.id === plusSelectedId)?.plusValue as Shape,
      minus: value,
    });
  };

  return (
    <div className={`question ${error ? 'error' : ''}`}>
      <h3>{question.text}</h3>
      <div className="options">
        <div className="plus-options">
          <h4>➕ Mejor descripción</h4>
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handlePlusSelect(option.id, option.plusValue)}
              className={plusSelectedId === option.id ? 'selected' : ''}
            >
              {option.text}
            </button>
          ))}
        </div>
        <div className="minus-options">
          <h4>➖ Menos descripción</h4>
          {question.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleMinusSelect(option.id, option.minusValue)}
              className={minusSelectedId === option.id ? 'selected' : ''}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;