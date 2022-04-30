import React, { useState, useEffect } from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import CircularProgress from '../components/CircularProgress';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const Signup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false,
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required('Required'),
        email: Yup.string().email('Enter valid email').required('Required'),
        phoneNumber: Yup.string()
            .typeError('Enter valid Phone Number')
            .required('Required')
            .matches(/^[0-9]+$/, 'Must be only number')
            .max(10, 'Must be exactly 10 digits'),
        password: Yup.string().required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Password not matched')
            .required('Required'),
    });
    const onSubmit = (values, props) => {
        setIsLoading(true);
    };

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
                Swal.fire('Success!', 'You Successfully signup!', 'success');
            }, 1000);

        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? (
                <>
                    <CircularProgress />
                </>
            ) : (
                <Grid>
                    <Paper style={paperStyle}>
                        <Grid align='center'>
                            <Avatar style={avatarStyle}>
                                <AddCircleOutlineOutlinedIcon />
                            </Avatar>
                            <h2 style={headerStyle}>Sign Up</h2>
                            <Typography variant='caption' gutterBottom>
                                Please fill this form to create an account !
                            </Typography>
                        </Grid>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                            {(props) => (
                                <Form>
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name='name'
                                        label='Name'
                                        placeholder='Enter your name'
                                        helperText={<ErrorMessage name='name' />}
                                    />
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name='email'
                                        label='Email'
                                        placeholder='Enter your email'
                                        helperText={<ErrorMessage name='email' />}
                                    />
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name='phoneNumber'
                                        label='Phone Number'
                                        placeholder='Enter your phone number'
                                        helperText={<ErrorMessage name='phoneNumber' />}
                                    />
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name='password'
                                        type='password'
                                        label='Password'
                                        placeholder='Enter your password'
                                        helperText={<ErrorMessage name='password' />}
                                    />
                                    <Field
                                        as={TextField}
                                        fullWidth
                                        name='confirmPassword'
                                        type='password'
                                        label='Confirm Password'
                                        placeholder='Confirm your password'
                                        helperText={<ErrorMessage name='confirmPassword' />}
                                    />
                                    <Button
                                        type='submit'
                                        fullWidth
                                        style={{ marginTop: 20 }}
                                        variant='contained'
                                        disabled={props.isSubmitting}
                                        color='primary'>
                                        {props.isSubmitting ? 'Loading' : 'Sign up'}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Paper>
                </Grid>
            )}
        </>
    );
};

export default Signup;
