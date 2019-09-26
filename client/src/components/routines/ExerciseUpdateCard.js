import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    width: '90vw'
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

const ExerciseUpdateCard = ({ exerciseData }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    sets: 0,
    repetitions: 0,
    weight: 0
  });

  useEffect(() => {
    if (exerciseData.progress[0]) {
      setValues({
        ...values,
        sets: exerciseData.progress[0].sets,
        repetitions: exerciseData.progress[0].repetitions,
        weight: exerciseData.progress[0].weight
      });
    }
  }, [exerciseData.progress]);

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Card className={classes.card}>
      <Fade in={true}>
        <Grid container direction='row' justify='center' alignItems='center'>
          <Grid item xs={12} sm={3} align='center'>
            <img
              src={exerciseData.exercise.imageUrl}
              className={classes.cover}
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
                  <Typography variant='subtitle1'>
                    {exerciseData.exercise.name}
                  </Typography>
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
                      onChange={e => handleChange(e)}
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
                      onChange={e => handleChange(e)}
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
                      onChange={e => handleChange(e)}
                      type='number'
                      InputLabelProps={{
                        shrink: true
                      }}
                      className={classes.fieldItem}
                      margin='normal'
                      variant='outlined'
                    />
                  </Grid>
                  <Grid item xs={12} sm={3} align='center'>
                    <Button
                      color='primary'
                      variant='contained'
                      className={classes.button}
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </Card>
  );
};

export default ExerciseUpdateCard;
