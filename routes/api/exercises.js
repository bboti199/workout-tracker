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
router.get('/', auth, async (req, res) => {
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
 * @route   DELETE api/exercises/:id
 * @desc    Remove exercise
 * @access  Private & Admin
 */
router.delete('/:id', isAdmin, async (req, res) => {
  try {
    await Exercise.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: 'Exercise removed successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

/**
 * @route   PUT api/exercises/:id/image
 * @desc    Update exercise image
 * @access  Private & Admin
 */
router.put(
  '/:id/image',
  [
    isAdmin,
    [
      check('imageUrl', 'Image url is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { imageUrl } = req.body;

    try {
      const exercise = await Exercise.findById(req.params.id);

      exercise.imageUrl = imageUrl;

      await exercise.save();

      res.json(exercise);
    } catch (err) {
      console.error(error);
      res.status(500).send('Internal Server Erorr');
    }
  }
);

/**
 * @route   POST api/exercises
 * @desc    Add a new exercise
 * @access  Private & Admin
 */
router.post(
  '/',
  [
    isAdmin,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('bodyPart', 'Body part is required')
        .not()
        .isEmpty()
    ]
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
