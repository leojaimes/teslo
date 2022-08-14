
import NextLink from 'next/link'
import { Box, Button, Grid, TextField, Typography, Link, Chip } from '@mui/material';

import { AuthLayout } from '../../components/layouts/';
import { useForm } from 'react-hook-form';
import { validations } from '../../utils';
import { tesloApi } from '../../api';
import { useContext, useState } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import { GetServerSideProps } from 'next';
import { signIn, getSession } from 'next-auth/react';

type FormData = {
    name: string;
    email: string;
    password: string;
};



const RegisterPage = () => {

    const router = useRouter();
    const { registerUser } = useContext( AuthContext );


    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ showError, setShowError ] = useState(false);
    const [ errorMessage, setErrorMessage ] = useState('');

    const onRegisterForm = async( {  name, email, password }: FormData ) => {
        
        setShowError(false);

        const { hasError, message } = await registerUser(name, email, password);


        // const { hasError, message } = await registerUser(name, email, password);

        // if ( hasError ) {
        //     setShowError(true);
        //     setErrorMessage( message! );
        //     setTimeout(() => setShowError(false), 3000);
        //     return;
        // }
        
        // // Todo: navegar a la pantalla que el usuario estaba
        // router.replace('/');


        if ( hasError ) {
            setShowError(true);
            setErrorMessage( message! );
            setTimeout(() => setShowError(false), 3000);
            return;
        }
        
        // Todo: navegar a la pantalla que el usuario estaba
        // const destination = router.query.p?.toString() || '/';
        // router.replace(destination);

        await signIn('credentials',{ email, password });


    }
    return (
        <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
            <AuthLayout title={'Register - Teslo'}  >
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
                            <Chip label={`User/password was not found`} color="error" icon={<ErrorOutline />} className="fadeIn"
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>


                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                label='Name'
                                variant='filled'
                                fullWidth
                                {
                                ...register('name',
                                    {
                                        required: 'This field is required',
                                        minLength: { value: 2, message: 'This field must be at least 2 characters' }
                                    }


                                )
                                }

                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>


                        <Grid
                            item
                            xs={12}
                        >
                            <TextField
                                type='email'
                                label='Email'
                                variant='filled'
                                fullWidth
                                {
                                ...register('email',
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
                                {
                                ...register('password',
                                    {
                                        required: 'This field is required',
                                        minLength: { value: 6, message: 'This field should have min 6 characters' },
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
                            <Button color='secondary' className='circular-btn' size='large' fullWidth
                                type='submit'
                            >Sign Up
                            </Button>
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
        </form>
    )
}



export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
    const session = await getSession({ req });
    // console.log({session});

    const { p = '/' } = query;

    if ( session ) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }


    return {
        props: { }
    }
}


export default RegisterPage