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
 * @route   GET api/routines/:routineId
 * @desc    List all routines of user
 * @access  Private
 */
router.get('/:routineId', auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.routineId).populate(
      'routine.exercise',
      { name: 1, imageUrl: 1, _id: 0 }
    );

    res.json(routine);
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
      check('description', 'Description is required')
        .not()
        .isEmpty(),
      check('routine', 'Routine is required')
        .not()
        .isEmpty(),
      check('routine.*.exercise', 'Exercise ID is required')
        .not()
        .isEmpty(),
      check(
        'routine.*.progress.*.weight',
        'Weight is requierd and has to be a number'
      )
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
    const { routineName, routine, description } = req.body;

    routine.map(r => {
      Exercise.findById(r.exercise)
        .then(e => {
          if (!e) {
            return res.status(400).json({ msg: 'Invalid exercise' });
          }
        })
        .catch(err => {
          if (err.kind === 'ObjectId') {
            return res.json({ msg: 'Invalid exercise' });
          }
        });
    });

    try {
      const newRoutine = new Routine({
        routineName,
        routine,
        description
      });

      await newRoutine.save();

      const user = await User.findById(req.user.id);
      user.routines.unshift(newRoutine._id);

      await user.save();

      return res.json(newRoutine);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Erorr');
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
    await Routine.findOneAndRemove({ _id: req.params.routineId });

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

/**
 * @route   POST api/routines/:routineId
 * @desc    Add progress for specific routine
 * @access  Private
 */
router.post(
  '/:routineId',
  [
    auth,
    [
      check('exercise', 'Exercise ID is required')
        .not()
        .isEmpty(),
      check('weight', 'Weight is requierd and has to be a number')
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
      const { exercise, weight } = req.body;

      const exerciseFound = await Exercise.findById(exercise);

      if (!exerciseFound) {
        return res.status(404).json({ msg: 'Exercise not found' });
      }

      const routine = await Routine.findById(req.params.routineId).populate(
        'routine.exercise'
      );

      routine.routine.map(r => {
        if (r.exercise._id == exercise) {
          const prevItem = r.progress[r.progress.length - 1];
          const newProgressItem = {
            weight,
            sets: prevItem.sets,
            repetitions: prevItem.repetitions
          };

          if (req.body.sets !== undefined) {
            newProgressItem.sets = req.body.sets;
          }

          if (req.body.repetitions !== undefined) {
            newProgressItem.repetitions = req.body.repetitions;
          }

          r.progress.unshift(newProgressItem);
        }
      });

      await routine.save();

      res.json(routine);
    } catch (err) {
      console.error(err);
      return res.status(500).send('Internal Server Erorr');
    }
  }
);

/**
 * @route   GET api/routines/:routineId/progress
 * @desc    Get routine progress
 * @access  Private
 */
router.get('/:routineId/progress', auth, async (req, res) => {
  try {
    const routine = await Routine.findById(req.params.routineId).populate(
      'routine.exercise',
      {
        _id: 0,
        name: 1,
        date: 1,
        imageUrl: 1
      }
    );

    res.json(routine.routine);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Internal Server Erorr');
  }
});

module.exports = router;
