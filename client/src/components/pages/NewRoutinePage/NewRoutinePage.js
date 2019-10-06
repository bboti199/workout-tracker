import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectAllExercises,
  selectLoading
} from '../../../redux/selectors/exercise';

import { fetchExercises } from '../../../redux/actions/exercise';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from './SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import ExerciseInfoCard from './ExerciseInfoCard';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const NewRoutinePage = ({ fetchExercises, exercises, loading }) => {
  const classes = useStyles();

  const [selectedExercises, setSelectedExercises] = useState([]);

  const [formData, setFormData] = useState({
    routineName: '',
    description: '',
    routine: []
  });

  useEffect(() => {
    fetchExercises();
  }, []);

  if (loading || exercises.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    );
  }

  const addExercise = (_, exercise) => {
    if (!selectedExercises.includes(exercise)) {
      setSelectedExercises([...selectedExercises, exercise]);

      setFormData({
        ...formData,
        routine: [
          ...formData.routine,
          {
            exercise: exercise._id,
            progress: { repetitions: 0, weight: 0, sets: 0 }
          }
        ]
      });
    }
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const selectValuesForExercise = index => {
    if (formData.routine[index]) {
      return formData.routine[index].progress;
    }
    return { sets: 0, repetitions: 0, weight: 0 };
  };

  const updateProgressValues = (e, index) => {
    // const index = formData.routine.findIndex(data => data.exercise === id);
    const newRoutineData = formData.routine;

    newRoutineData[index].progress[e.target.name] = e.target.value;

    setFormData({
      ...formData,
      routine: newRoutineData
    });
  };

  const removeExercise = id => {
    setSelectedExercises(
      [...selectedExercises].filter(data => data._id !== id)
    );
    setFormData({
      ...formData,
      routine: formData.routine.filter(data => data.exercise !== id)
    });
  };

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item xs={12} sm={12}>
        <TextField
          style={{ width: '85vw', marginTop: '1rem', marginBottom: '1rem' }}
          label='Routine name'
          variant='outlined'
          name='routineName'
          value={formData.routineName}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <TextField
          style={{ width: '85vw' }}
          label='Description'
          variant='outlined'
          name='description'
          value={formData.description}
          onChange={e => handleChange(e)}
        />
      </Grid>
      <Grid item xs={12} sm={12}>
        <SearchBar data={exercises} addExercise={addExercise} />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Typography
          variant='body1'
          style={{ color: '#626262', marginTop: '2rem' }}
        >
          Here you can adjust the exercise data
        </Typography>

        {selectedExercises &&
          selectedExercises.map((exercise, idx) => (
            <Grid item xs={12} sm={12} key={exercise._id}>
              <ExerciseInfoCard
                exercise={exercise}
                values={selectValuesForExercise(idx)}
                handleChange={updateProgressValues}
                index={idx}
                removeExercise={removeExercise}
              />
            </Grid>
          ))}
      </Grid>
      <Grid item xs={12} sm={12}>
        <Button
          color='primary'
          variant='contained'
          onClick={() =>
            console.log(JSON.stringify(formData.routine, undefined, 2))
          }
        >
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  exercises: selectAllExercises,
  loading: selectLoading
});

export default connect(
  mapStateToProps,
  { fetchExercises }
)(NewRoutinePage);
