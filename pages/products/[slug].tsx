import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ProductSlideShow, SizeSelector } from '../../components/products';
import { ItemCounter } from '../../components/ui';
import { initialData } from '../../database/products';

const product = initialData.products[0]

const ProductPage = () => {
    return (
        <ShopLayout title={`${product.title}`} pageDescription={`this is a ${product.title}`}
        >
            <Grid
                container
                spacing={3}
            >

                <Grid item xs={12} sm={7}>

                    <ProductSlideShow images={product.images} />


                </Grid>

                <Grid item xs={12} sm={5}>

                    <Box
                        display='flex'
                        flexDirection='column'

                    >

                        {/** Tittles */}

                        <Typography
                            variant='h1'
                            component='h1'
                        >
                            {product.title}
                        </Typography>

                        <Typography
                            variant='subtitle1'
                            component='h2'
                        >
                            ${product.price}
                        </Typography>



                        <Box
                            sx={{
                                margin: '2px 2px'
                            }}
                        >
                            <Typography
                                variant='subtitle2'
                                component='h2'
                            >
                                Quantity ${product.price}
                            </Typography>
                            <ItemCounter />
                            <SizeSelector
                                sizes={['L', 'XL', 'XXXL']}
                                selectedSize='L'
                            />

                        </Box>


                        {/**Add To cart */}
                        <Button
                            color='secondary'
                            className='circular-btn'

                        >   Add to cart

                        </Button>

                        {
                            false && (
                                <Chip
                                    label='Not Available'
                                    color='error'
                                    variant='outlined'

                                />
                            )
                        }


                        {/** description */}

                        <Box
                            sx={{
                                marginTop: '3px'
                            }}

                        >

                            <Typography

                                variant='subtitle2'
                            >
                                Description:
                            </Typography>


                            <Typography

                                variant='body2'
                            >
                                {product.description}
                            </Typography>
                        </Box>



                    </Box>
                </Grid>



            </Grid>

        </ShopLayout>
    )
}




export default ProductPage