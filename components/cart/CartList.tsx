
import React from 'react'
import NextLink from 'next/link'

import { Typography, Grid, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';

import { initialData } from '../../database/products';
import { getImage } from '../../utils/get-image';
import { ItemCounter } from '../ui';


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]
export const CartList = () => {
    return (
        <>
            {
                productsInCart.map(product => (
                    <Grid
                        key={product.slug}
                        container
                        spacing={2}
                        sx={{
                            marginBottom: 1,

                        }}
                    >
                        <Grid
                            item
                            xs={3}
                        >
                            <NextLink
                                href={`/products/${product.slug}`}
                                passHref
                            >
                                <Link>
                                    <CardActionArea>
                                        <CardMedia
                                            image={getImage(product.images[0])}
                                            component='img'
                                            sx={{
                                                borderRadius: '5px'
                                            }}
                                        >

                                        </CardMedia>
                                    </CardActionArea>
                                </Link>

                            </NextLink>
                        </Grid>

                        <Grid
                            item
                            xs={7}
                        >
                            <Box
                                display='flex'
                                flexDirection='column'
                            >
                                <Typography
                                    variant='body1'
                                >
                                    {product.title}
                                </Typography>

                                <Typography
                                    variant='body1'
                                >
                                    Size: <strong>M</strong>
                                </Typography>
                                {/**Condition */}

                                <ItemCounter />
                            </Box>
                        </Grid>
                        <Grid
                            item
                            xs={2}
                            display='flex'
                            alignItems='center'
                            flexDirection='column'
                        >
                            <Typography
                                variant='subtitle1'
                            >
                                ${product.price}
                            </Typography>
                            {/** editable*/}

                            <Button
                                variant='text'
                                color='secondary'
                            >
                                Remove
                            </Button>
                        </Grid>


                    </Grid>
                ))
            }
        </>
    )
}

