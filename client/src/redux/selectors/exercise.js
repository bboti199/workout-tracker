import { createSelector } from 'reselect';

const selectExercises = state => state.exercise.exercises;

export const selectAllExercises = createSelector(
  [selectExercises],
  exercises => exercises
);

export const selectExerciseByBodyPart = bodyPart =>
  createSelector(
    [selectExercises],
    exercises => exercises.filter(data => data.bodyPart === bodyPart)
  );
