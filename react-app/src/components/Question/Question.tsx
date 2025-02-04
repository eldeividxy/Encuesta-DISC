import React, { useState } from 'react';
import { Question, UserSelection, Shape } from '../../types/types';
import './Question.css';

interface QuestionProps {
  question: Question;
  onSelect: (selection: UserSelection) => void;
  error?: string; // Prop para recibir el mensaje de error
}

const QuestionComponent: React.FC<QuestionProps> = ({ question, onSelect, error }) => {
  const [plusSelected, setPlusSelected] = useState<Shape | null>(null);
  const [minusSelected, setMinusSelected] = useState<Shape | null>(null);

  const handlePlusSelect = (value: Shape) => {
    setPlusSelected(value);
    onSelect({ questionId: question.id, plus: value, minus: minusSelected ?? '' });
  };

  const handleMinusSelect = (value: Shape) => {
    setMinusSelected(value);
    onSelect({ questionId: question.id, plus: plusSelected ?? '', minus: value });
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
              onClick={() => handlePlusSelect(option.value as Shape)}
              className={plusSelected === option.value ? 'selected' : ''}
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
              onClick={() => handleMinusSelect(option.value as Shape)}
              className={minusSelected === option.value ? 'selected' : ''}
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