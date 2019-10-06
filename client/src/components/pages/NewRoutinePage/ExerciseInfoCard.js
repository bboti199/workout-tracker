import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  card: {
    width: '85vw'
  },
  cover: {
    width: 200
  },
  fieldItem: {
    marginLeft: '1rem'
  },
  button: {
    marginTop: '1rem',
    marginBottom: '1rem'
  }
});

const ExerciseInfoCard = ({
  exercise,
  values,
  handleChange,
  removeExercise,
  index
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CloseIcon
        onClick={() => removeExercise(exercise._id)}
        style={{ marginLeft: '5px', marginTop: '10px' }}
      />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item xs={12} sm={3} align='center'>
          <img
            src={exercise.imageUrl}
            className={classes.cover}
            alt='exercise'
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item xs={12} sm={9}>
              <CardContent className={classes.content}>
                <Typography variant='subtitle1'>{exercise.name}</Typography>
              </CardContent>
            </Grid>
            <Grid item xs={12} sm={9} align='center'>
              <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
              >
                <Grid item xs={12} sm={3}>
                  <TextField
                    label='Sets'
                    value={values.sets}
                    name='sets'
                    onChange={e => handleChange(e, index)}
                    type='number'
                    InputLabelProps={{
                      shrink: true
                    }}
                    className={classes.fieldItem}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label='Reps'
                    value={values.repetitions}
                    name='repetitions'
                    onChange={e => handleChange(e, index)}
                    type='number'
                    InputLabelProps={{
                      shrink: true
                    }}
                    className={classes.fieldItem}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label='Weight'
                    value={values.weight}
                    name='weight'
                    onChange={e => handleChange(e, index)}
                    type='number'
                    InputLabelProps={{
                      shrink: true
                    }}
                    className={classes.fieldItem}
                    margin='normal'
                    variant='outlined'
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ExerciseInfoCard;
