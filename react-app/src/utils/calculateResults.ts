import { UserSelection, Question, Shape } from '../types/types';

export const calculateResults = (selections: UserSelection[], questions: Question[]) => {
  // Definimos el tipo de results para evitar errores de indexación
  const results: Record<Shape, { positive: number; negative: number; total: number }> = {
    square: { positive: 0, negative: 0, total: 0 },
    z: { positive: 0, negative: 0, total: 0 },
    triangle: { positive: 0, negative: 0, total: 0 },
    circle: { positive: 0, negative: 0, total: 0 },
    N: { positive: 0, negative: 0, total: 0 } // Añadimos 'N' para evitar errores
  };

  selections.forEach((selection) => {
    const question = questions.find((q) => q.id === selection.questionId);
    if (!question) return;

    const plusOption = question.options.find((opt) => opt.id === selection.plusOptionId);
    const minusOption = question.options.find((opt) => opt.id === selection.minusOptionId);

    if (plusOption?.plusValue && plusOption.plusValue !== "N") {
      const shape = plusOption.plusValue as Shape; // Aseguramos el tipo
      results[shape].positive += 1;
      results[shape].total += 1;
    }

    if (minusOption?.minusValue && minusOption.minusValue !== "N") {
      const shape = minusOption.minusValue as Shape; // Aseguramos el tipo
      results[shape].negative += 1;
      results[shape].total -= 1;
    }
  });

  // Eliminamos 'N' del resultado final, ya que no es una figura válida
  //delete results.N;

  return results;
};