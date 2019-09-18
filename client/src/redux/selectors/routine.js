import { createSelector } from 'reselect';

const selectRoutine = state => state.routine;

export const selectLoading = state => state.routine.loading;

export const selectAllRoutines = createSelector(
  [selectRoutine],
  routine => routine.routines
);

export const selectSingleRoutineLoading = state =>
  state.routine.singleRoutineLoading;

export const selectSingleRoutine = state => state.routine.singleRoutine;
