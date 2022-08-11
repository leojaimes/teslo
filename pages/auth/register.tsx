
import NextLink from 'next/link'
import { Box, Button, Grid, TextField, Typography, Link, Chip } from '@mui/material';

import { AuthLayout } from '../../components/layouts/';
import { useForm } from 'react-hook-form';


type FormData = {
    name    : string;
    email   : string;
    password: string;
};



const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    return (
        <AuthLayout title={'Login - Teslo'}  >
            <Box sx={{ width: 350, paddin: '10px 20px', }}>
                <Grid
                    container
                    spacing={2}
                >
                    <Grid
                        item
                        xs={12}
                    >
                        <Typography variant='h1' component='h1'>Sign Up</Typography>
                    </Grid>


                    <Grid
                        item
                        xs={12}
                    >
                        <TextField
                            label='Name'
                            variant='filled'
                            fullWidth
                        />
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

                    <Grid
                        item
                        xs={12}
                    >
                        <Button color='secondary' className='circular-btn' size='large' fullWidth>Sign Up</Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        display='flex'
                        justifyContent='end'
                    >
                        <NextLink href={`/auth/login`} passHref>
                            <Link underline='always'> You Already have an account? </Link>
                            {/** <Chip label='Sign Up' sx={{ width: '100%', height: 40 }} /> */}
                        </NextLink>
                    </Grid>




                </Grid>
            </Box>

        </AuthLayout>
    )
}

export default RegisterPage