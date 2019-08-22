const data = require('./exercises');
const Exercise = require('../models/Exercise');

const migrateData = () => {
  data.map(exercise => {
    const newExercise = new Exercise(exercise);
    newExercise
      .save()
      .then(() => console.log('Data added!'))
      .catch(err => console.error(err));
  });
};

module.exports = migrateData;
