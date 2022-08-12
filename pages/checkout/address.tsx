
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';
import { ShopLayout } from '../../components/layouts/';

import { countries } from '../../utils'



type FormData = {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
}


const getAddressFromCookies = (): FormData => {
    return {
        firstName: Cookies.get('firstName') || '',
        lastName: Cookies.get('lastName') || '',
        address: Cookies.get('address') || '',
        address2: Cookies.get('address2') || '',
        zip: Cookies.get('zip') || '',
        city: Cookies.get('city') || '',
        country: Cookies.get('country') || '',
        phone: Cookies.get('phone') || '',
    }
}


const AddressPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: getAddressFromCookies()
    });


    const onSubmitAddress = (data: FormData) => {

    }


    return (

        <ShopLayout
            title={'Address'}
            pageDescription={'Confirm your destination address'}
        >

            <form
                onSubmit={handleSubmit(onSubmitAddress)}
            >
                <Typography
                    variant='h1'
                    component='h1'
                >
                    Address

                </Typography>

                <Grid
                    container spacing={2}
                    sx={{
                        mt: 2
                    }}
                >
                    <Grid
                        item xs={12} sm={6}
                    >
                        <TextField
                            label='Name' variant='filled' fullWidth
                            {
                            ...register('firstName', {
                                required: 'Este campo es requerido'

                            })
                            }

                            error={!!errors.firstName}
                            helperText={errors.firstName?.message}
                        />


                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            label='Last Name'
                            variant='filled'
                            fullWidth
                            {
                            ...register('lastName', {
                                required: 'Este campo es requerido'

                            })
                            }
                            error={!!errors.lastName}
                            helperText={errors.lastName?.message}

                        />


                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            label='Address 1'
                            variant='filled'
                            fullWidth
                            {
                            ...register('address', {
                                required: 'Este campo es requerido'

                            })
                            }
                            error={!!errors.address}
                            helperText={errors.address?.message}

                        />


                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            label='Address 2 (optional)'
                            variant='filled'
                            fullWidth
                            {...register('address2')}
                        />


                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            label='Postal Code'
                            variant='filled'
                            fullWidth
                            {
                            ...register('zip', {
                                required: 'Este campo es requerido'

                            })
                            }
                            error={!!errors.zip}
                            helperText={errors.zip?.message}

                        />


                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            label='City'
                            variant='filled'
                            fullWidth
                            {
                            ...register('city', {
                                required: 'Este campo es requerido'

                            })
                            }

                            error={!!errors.city}
                            helperText={errors.city?.message}

                        />


                    </Grid>



                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >

                        <FormControl
                            fullWidth

                        >

                            <TextField
                                select
                                variant='filled'
                                label='Country'
                                defaultValue={countries[0].code}
                                error={!!errors.country}

                                {
                                ...register('country',
                                    {
                                        required: 'this field is required'
                                    }
                                )
                                }
                            >
                                {
                                    countries.map((country) => (
                                        <MenuItem
                                            key={country.code}
                                            value={country.code}>{country.name}
                                        </MenuItem>

                                    ))
                                }


                            </TextField>


                        </FormControl>

                    </Grid>

                    <Grid
                        item
                        xs={12}
                        sm={6}
                    >
                        <TextField
                            label='Phone'
                            variant='filled'
                            fullWidth

                            {...register('phone', {
                                required: 'Este campo es requerido'
                            })}
                            error={!!errors.phone}
                            helperText={errors.phone?.message}
                        />

                    </Grid>



                </Grid>

                <Box

                    display='flex'
                    flexDirection='column'
                    alignItems='center'
                    sx={{
                        marginTop: '20px'
                    }}
                >

                    <Button color='secondary' className='circular-btn' size='large' type='submit'>
                        Review Order
                    </Button>
                </Box>
            </form>
        </ShopLayout >

    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

/*import { jwt } from '../../utils';
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ req }) => {

   const { token = '' } = req.cookies;
   let isValidToken = false;

   try {
      await jwt.isValidToken(token);
      isValidToken = true;
   } catch (error) {
      isValidToken = false;
   }

   console.log('isValidToken ' + isValidToken)
   //si no es tocken valido se devuelve a hacer que el usuario se loguee
   if (!isValidToken) {
      return {
         redirect: {
            destination: '/auth/login?p=/checkout/address',
            permanent: false,
         }
      }
   }

   return {
      props: {

      }
   }
}*/


export default AddressPage