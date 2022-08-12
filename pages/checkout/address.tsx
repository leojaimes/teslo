import { SpaceBar } from '@mui/icons-material';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts/';

const AddressPage = () => {
    return (
        <ShopLayout
            title={'Address'}
            pageDescription={'Confirm your destination address'}
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
                        <InputLabel>Pais</InputLabel>
                        <Select
                            variant='filled'
                            value={1}
                        >
                            <MenuItem value={1}>Colombia</MenuItem>
                            <MenuItem value={2}>Mexique</MenuItem>
                            <MenuItem value={3}>Canada</MenuItem>
                        </Select>

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

                <Button color='secondary' className='circular-btn' size='large'>
                    Review Order
                </Button>
            </Box>
        </ShopLayout >
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

import { jwt } from '../../utils';
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
}


export default AddressPage