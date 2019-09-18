const mongoose = require('mongoose');

const RoutineSchema = new mongoose.Schema({
  routineName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  routine: [
    {
      exercise: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'exercise'
      },
      progress: [
        {
          sets: {
            type: Number,
            default: 3
          },
          repetitions: {
            type: Number,
            default: 8
          },
          weight: {
            type: Number,
            required: true
          },
          date: {
            type: Date,
            default: Date.now
          }
        }
      ]
    }
  ]
});

module.exports = Routine = mongoose.model('routine', RoutineSchema);
