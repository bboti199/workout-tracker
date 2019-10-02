import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fuse from 'fuse.js';
import SelectFieldItem from './SelectFieldItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '85vw'
  }
}));

const options = {
  keys: [
    {
      name: 'name',
      weight: 0.6
    },
    {
      name: 'bodyPart',
      weight: 0.4
    }
  ]
};

const SearchBar = ({ data }) => {
  const classes = useStyles();

  const [exercises, setExercises] = useState('');

  const handleSearch = e => {
    const fuse = new Fuse(data, options);

    setExercises(fuse.search(e.target.value));
  };

  return (
    <div>
      <TextField
        label='Enter exercise name or body part...'
        type='search'
        name='searchField'
        variant='outlined'
        className={classes.textField}
        margin='normal'
        onChange={e => handleSearch(e)}
      />
      <Grid container direction='column' alignContent='center' justify='center'>
        <Grid item xs={12} sm={12}>
          <div style={{ height: '30vh', overflow: 'auto' }}>
            {exercises &&
              exercises.map(exercise => (
                <SelectFieldItem key={exercise._id} exercise={exercise} />
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
