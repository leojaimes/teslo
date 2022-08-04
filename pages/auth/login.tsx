import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { AuthLayout } from '../../components/layouts/';

const LoginPage = () => {
    return (
        <AuthLayout title={'Login - Teslo'}  >
            <Box sx={{ width: 350, paddin: '10px 20px', }}>
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h1' component='h1'>Sign In</Typography>
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            label='Email' 
                            variant='filled'
                            fullWidth
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            label='Password' 
                            variant='filled'
                            type='password'
                            fullWidth
                        />
                    </Grid>



                </Grid>
            </Box>

        </AuthLayout>
    )
}

export default LoginPage