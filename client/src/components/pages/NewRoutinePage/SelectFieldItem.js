import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    width: '85vw',
    maxWidth: '85vw',
    backgroundColor: theme.palette.background.paper
  }
}));

const SelectFieldItem = ({ exercise, handleClick }) => {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem
        key={exercise._id}
        onClick={e => handleClick(e, exercise)}
        button
      >
        <ListItemAvatar>
          <Avatar alt={`${exercise.bodyPart}`} src={`${exercise.imageUrl}`} />
        </ListItemAvatar>
        <ListItemText primary={`${exercise.name}`} />
        <ListItemSecondaryAction>
          <Button
            color='primary'
            variant='outlined'
            onClick={e => handleClick(e, exercise)}
          >
            <AddIcon />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};

export default SelectFieldItem;
