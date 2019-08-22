const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Exercise = require('../../models/Exercise');
const User = require('../../models/User');
const Routine = require('../../models/Routine');

const auth = require('../../middleware/auth');

/**
 * @route   GET api/routines
 * @desc    List all routines of user
 * @access  Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const routinesArr = user.routines.map(async routine => {
      const r = await Routine.findById(routine._id).populate(
        'routine.exercise',
        { name: 1, imageUrl: 1, _id: 0 }
      );
      return r;
    });

    const routines = await Promise.all(routinesArr);

    res.json(routines);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @route   POST api/routines
 * @desc    Create new routine for user
 * @access  Private
 */
router.post(
  '/',
  [
    auth,
    [
      check('routineName', 'Routine name is required')
        .not()
        .isEmpty(),
      check('exercises.*.exercise', 'Exercise ID is required')
        .not()
        .isEmpty(),
      check('exercises.*.weight', 'Weight is requierd and has to be a number')
        .isNumeric()
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { routineName, exercises } = req.body;

      exercises.map(exercise => {
        Exercise.findById(exercise.exercise)
          .then(e => {
            if (!e) {
              return res.status(400).json({ msg: 'Invalid exercise' });
            }
          })
          .catch(err => {
            if (err.kind === 'ObjectId') {
              return res.status(400).json({ msg: 'Invalid exercise' });
            }
            return res.status(400).json(err);
          });
      });

      const newRoutine = new Routine({
        routineName,
        routine: exercises
      });

      await newRoutine.save();

      const user = await User.findById(req.user.id);
      user.routines.unshift(newRoutine._id);

      await user.save();

      res.json(newRoutine);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Erorr');
    }
  }
);

/**
 * @route   DELETE api/routines/:routineId
 * @desc    Delete a routine
 * @access  Private
 */
router.delete('/:routineId', auth, async (req, res) => {
  try {
    Routine.findOneAndRemove({ _id: req.params.routineId });

    const user = await User.findById(req.user.id);

    const removeIndex = user.routines
      .map(routine => routine.id)
      .indexOf(req.params.routineId);

    user.routines.splice(removeIndex, 1);

    await user.save();

    res.json({ msg: 'Routine removed successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Erorr');
  }
});

module.exports = router;
