import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: '90vw'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  cover: {
    width: 151,
    marginRight: '1rem'
  },
  fields: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(3),
    paddingBottom: theme.spacing(1)
  },
  fieldItem: {
    marginLeft: '1rem'
  },
  button: {
    height: '50%',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
    marginRight: '4rem'
  }
}));

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
      <CardMedia
        className={classes.cover}
        image={exerciseData.exercise.imageUrl}
      />
      <Fade in={true}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant='subtitle1'>
              {exerciseData.exercise.name}
            </Typography>
          </CardContent>
          <div className={classes.fields}>
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
          </div>
        </div>
      </Fade>
      <Button color='primary' variant='contained' className={classes.button}>
        Save
      </Button>
    </Card>
  );
};

export default ExerciseUpdateCard;
