import { createSelector } from 'reselect';

const selectRoutine = state => state.routine;

export const selectRoutines = createSelector(
  [selectRoutine],
  routine => routine.routines
);

export const selectRoutinesLoading = createSelector(
  [selectRoutine],
  routine => routine.loading
);
