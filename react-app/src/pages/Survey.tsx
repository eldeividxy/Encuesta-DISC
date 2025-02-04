import React, { useState } from 'react';
import { Question, UserSelection } from '../types/types';
import QuestionComponent from '../components/Question/Question';
import ConfirmationModal from '../components/ConfirmationModal/ConfirmationModal';
import Results from '../components/Result/Result';
import questionsData from '../data/questions.json';
import './Survey.css';

const Survey: React.FC = () => {
  const [userSelections, setUserSelections] = useState<UserSelection[]>([]);
  const [errors, setErrors] = useState<{ [key: number]: string }>({});
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSelect = (selection: UserSelection) => {
    const updatedSelections = userSelections.filter(
      (s) => s.questionId !== selection.questionId
    );
    setUserSelections([...updatedSelections, selection]);
    validateSelection(selection);
  };

  const validateSelection = (selection: UserSelection) => {
    const { questionId, plus, minus } = selection;
    const newErrors = { ...errors };

    if (plus === minus) {
      newErrors[questionId] = 'No puedes seleccionar la misma opción en "+" y "-".';
    } else if (!plus || !minus) {
      newErrors[questionId] = 'Debes seleccionar una opción en "+" y otra en "-".';
    } else {
      delete newErrors[questionId];
    }

    setErrors(newErrors);
  };

  const handleSubmit = () => {
    if (Object.keys(errors).length > 0) {
      alert('Por favor, corrige los errores antes de finalizar la encuesta.');
      return;
    }

    if (userSelections.length !== questionsData.length) {
      alert('Debes responder todas las preguntas antes de finalizar.');
      return;
    }

    setIsConfirmationModalOpen(true);
  };

  const handleConfirm = () => {
    setIsConfirmationModalOpen(false);
    setShowResults(true);
  };

  const handleCancel = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <div className="survey">
      <h1>Encuesta DISC</h1>
      {questionsData.map((question) => (
        <div key={question.id}>
          <QuestionComponent
            question={question}
            onSelect={handleSelect}
            error={errors[question.id]}
          />
          {errors[question.id] && (
            <p className="error-message">{errors[question.id]}</p>
          )}
        </div>
      ))}
      <button onClick={handleSubmit}>Finalizar Encuesta</button>

      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

      {showResults && (
        <Results userSelections={userSelections} onClose={handleCloseResults} />
      )}
    </div>
  );
};

export default Survey;