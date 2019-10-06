import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import {
  enqueueSnackbar,
  closeSnackbar
} from '../../redux/actions/notification';
import { deleteRoutine } from '../../redux/actions/routine';

const DeleteDialog = ({
  open,
  handleClose,
  routine,
  setOpen,
  enqueueSnackbar,
  closeSnackbar,
  deleteRoutine
}) => {
  const handleDelete = async () => {
    setOpen(false);
    try {
      deleteRoutine(routine._id);
      enqueueSnackbar({
        message: 'Routine deleted successfully!',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          action: key => (
            <Button
              style={{ color: 'white' }}
              onClick={() => closeSnackbar(key)}
            >
              got it
            </Button>
          )
        }
      });
    } catch (err) {
      enqueueSnackbar({
        message: 'Something went wrong...',
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'error',
          action: key => (
            <Button
              style={{ color: 'white' }}
              onClick={() => closeSnackbar(key)}
            >
              got it
            </Button>
          )
        }
      });
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        {'Are you sure you want to delete this routine?'}
      </DialogTitle>
      <DialogActions>
        <Button onClick={handleDelete} color='primary'>
          Delete
        </Button>
        <Button onClick={handleClose} color='primary' autoFocus>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  null,
  { enqueueSnackbar, closeSnackbar, deleteRoutine }
)(DeleteDialog);
