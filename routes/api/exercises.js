const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Exercise = require('../../models/Exercise');

const auth = require('../../middleware/auth');
const isAdmin = require('../../middleware/isAdmin');

/**
 * @route   GET api/exercises
 * @desc    List all exercises
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find();
    res.json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @route   GET api/exercises/:bodyPart
 * @desc    List all exercises by body part
 * @access  Private
 */
router.get('/:bodyPart', auth, async (req, res) => {
  try {
    const exercises = await Exercise.find({ bodyPart: req.params.bodyPart });
    res.json(exercises);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @route   POST api/exercises
 * @desc    Add a new exercise
 * @access  Private
 */
router.post(
  '/',
  isAdmin,
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('bodyPart', 'Body part is required')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, imageUrl, bodyPart } = req.body;
    try {
      const exercise = new Exercise({
        name,
        imageUrl,
        bodyPart
      });
      await exercise.save();

      res.json(exercise);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  }
);

module.exports = router;
