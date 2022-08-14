
import { useContext, useEffect, useState } from 'react';
import NextLink from 'next/link'

import { getSession, signIn, getProviders } from 'next-auth/react'
import { Box, Button, Grid, TextField, Typography, Link, Chip, Divider } from '@mui/material';

import { AuthLayout } from '../../components/layouts/';
import { useForm } from 'react-hook-form';
import { validations } from '../../utils';

import { ErrorOutline } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { AuthContext } from '../../context/auth';
import { GetServerSideProps } from 'next';





type FormData = {
    email: string,
    password: string,
};


const LoginPage = () => {
    const router = useRouter();
    const { loginUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    
    const [showError, setShowError] = useState(false);




    const [providers, setProviders] = useState<any>({});

    useEffect(() => {
      getProviders().then( prov => {
        // console.log({prov});
        setProviders(prov)
      })
    }, [])
    





    const onLoginUser = async ({ email, password }: FormData) => {

        setShowError(false);

        // const isValidLogin = await loginUser(email, password);

        // if (!isValidLogin) {
        //     setShowError(true);
        //     setTimeout(() => setShowError(false), 3000);
        //     return;
        // }



        // // Todo: navegar a la pantalla que el usuario estaba
        // const destination = router.query.p?.toString() || '/';
        // router.replace(destination);


        await signIn('credentials', { email, password })
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

                            <Chip label={`User/password was not found`} color="error" icon={<ErrorOutline />} className="fadeIn"
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />

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
                            <NextLink href={router.query.p ? `/auth/register?p=${router.query.p}` : '/auth/register'}

                                passHref>
                                <Link underline='always'> Dont you have an account? </Link>
                                {/** <Chip label='Sign Up' sx={{ width: '100%', height: 40 }} /> */}
                            </NextLink>
                        </Grid>


                        <Grid item xs={12} display='flex' flexDirection='column' justifyContent='end'>
                            <Divider sx={{ width: '100%', mb: 2 }} />
                            {
                                Object.values( providers ).map(( provider: any ) => {
                                    
                                    if ( provider.id === 'credentials' ) return (<div key="credentials"></div>);

                                    return (
                                        <Button
                                            key={ provider.id }
                                            variant="outlined"
                                            fullWidth
                                            color="primary"
                                            sx={{ mb: 1 }}
                                            onClick={ () => signIn( provider.id ) }
                                        >
                                            { provider.name }
                                        </Button>
                                    )

                                })
                            }

                        </Grid>



                    </Grid>
                </Box>
            </form>

        </AuthLayout>
    )
}



export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {

    const session = await getSession({ req });
    console.log(`'session: \n`)
    console.log({ session });

    const { p = '/' } = query;

    if (session) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: false
            }
        }
    }


    return {
        props: {}
    }
}



export default LoginPage