import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Copyright from '../../layout/Copyright';

import { Link as RouterLink } from 'react-router-dom';

import { withFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('You must provide a valid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
});

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const C = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) => {
  const classes = useStyles();
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='email'
            label='Email Address'
            autoComplete='email'
            autoFocus
            error={errors.email && touched.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.email && touched.email && errors.email}
          />
          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            name='password'
            label='Password'
            type='password'
            autoComplete='current-password'
            error={errors.password && touched.password}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.password && touched.password && errors.password}
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Grid item>
              <Link to='/register' component={RouterLink} variant='body2'>
                {"Don't have an account? Register"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export const LoginView = withFormik({
  validationSchema,
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);

    if (errors) {
      setErrors(errors);
    }
  }
})(C);
