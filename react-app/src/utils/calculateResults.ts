// calculateResults.ts
import { UserSelection } from '../types/types';

export const calculateResults = (selections: UserSelection[]) => {
  const results = {
    square: 0,
    z: 0,
    triangle: 0,
    circle: 0,
  };

  selections.forEach((selection) => {
    if (selection.plus) results[selection.plus] += 1;
    if (selection.minus) results[selection.minus] -= 1;
  });

  return results;
};