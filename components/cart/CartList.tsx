
import React, { FC, useContext } from 'react'
import NextLink from 'next/link'

import { Typography, Grid, Link, CardActionArea, CardMedia, Box, Button } from '@mui/material';

import { initialData } from '../../database/products';
import { getImage } from '../../utils/get-image';
import { ItemCounter } from '../ui';
import { CartContext } from '../../context/cart/CartContext';
import { ICartProduct } from '../../interfaces/cart';


const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]


interface Props {
    editable?: boolean
}
export const CartList: FC<Props> = ({ editable = false }) => {
    const { cart, addProductToCart, removeCartProduct } = useContext(CartContext)



    const onClickRemoveCartProduct = (product: ICartProduct)=> {
        removeCartProduct( product )
    }


    return (
        <>
            {
                cart.map(product => (
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
                                            image={getImage(product.image)}
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
                                    Size: <strong>{ product.size }</strong>
                                </Typography>
                                {/**Condition */}
                                {
                                    editable ?
                                        <ItemCounter value={ product.quantity  }
                                            onClickMinus={function (): void {

                                            }}

                                            onClickPlus={function (): void {

                                            }}

                                        />
                                        :
                                        <Typography variant='h4'>
                                            3
                                        </Typography>
                                }

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

                            {
                                editable &&

                                <Button
                                    variant='text'
                                    color='secondary'
                                    onClick={()=> onClickRemoveCartProduct(product)}
                                >
                                    Remove
                                </Button>
                            }

                        </Grid>


                    </Grid>
                ))
            }
        </>
    )
}

