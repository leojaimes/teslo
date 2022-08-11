
import NextLink from 'next/link'
import { Box, Button, Grid, TextField, Typography, Link, Chip } from '@mui/material';

import { AuthLayout } from '../../components/layouts/';
import { useForm } from 'react-hook-form';
import { validations } from '../../utils';
import tesloApi from '../../api/tesloApi';




type FormData = {
    email: string,
    password: string,
};


const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    console.log({ errors })

    const onLoginUser = async ({ email, password }: FormData) => {
        try {
            const { data } = await tesloApi.post(`/auth/login`, { email, password })
            console.log(data)
        } catch (error) {
            console.log(error)
        }



    }
    return (
        <AuthLayout title={'Login - Teslo'}  >
            <form onSubmit={handleSubmit(onLoginUser)} noValidate>
                <Box sx={{ width: 350, paddin: '10px 20px', }}>
                    <Grid
                        container
                        spacing={2}
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
                                type='email'
                                fullWidth
                                {...register(
                                    'email',
                                    {
                                        required: 'This field is required',
                                        validate: validations.isEmail
                                    }
                                )
                                }
                                error={!!errors.email}
                                helperText={errors.email?.message}
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
                                {...register('password',

                                    {
                                        required: 'This field is required',
                                        minLength: { value: 6, message: 'This field should have min 6 characters' },



                                    }



                                )}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                        >
                            <Button
                                type='submit'
                                color='secondary'
                                className='circular-btn'
                                size='large'
                                fullWidth
                            >Sign In</Button>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            display='flex'
                            justifyContent='end'
                        >
                            <NextLink href={`/auth/register`} passHref>
                                <Link underline='always'> Dont you have an account? </Link>
                                {/** <Chip label='Sign Up' sx={{ width: '100%', height: 40 }} /> */}
                            </NextLink>
                        </Grid>



                    </Grid>
                </Box>
            </form>

        </AuthLayout>
    )
}

export default LoginPage