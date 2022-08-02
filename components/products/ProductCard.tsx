

import React, { FC, useState, useMemo } from 'react'
import NextLink from 'next/link'

import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'

import { IProduct } from '../../interfaces'
import { getImage } from '../../utils/get-image'


interface Props {
    product: IProduct
}
export const ProductCard: FC<Props> = ({ product }) => {


    const [isHovered, setIsHovered] = useState(false)
    const productMemo = useMemo(() => {

        return isHovered ? getImage(product.images[0]) : getImage(product.images[1])
    }, [isHovered, product.images])


    const onMouseEnter = () => {
        setIsHovered(true)
    }
    const onMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <Grid
            item xs={6} sm={4}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Card>
                <NextLink
                    href={`/product/${product.slug}`}
                    passHref
                    prefetch={false}
                >
                    <Link
                    >
                        <CardActionArea>
                            <CardMedia
                                className='fadeIn'
                                component='img'
                                image={productMemo}
                                alt={product.title}
                            >
                            </CardMedia>
                        </CardActionArea>
                    </Link>
                </NextLink>
            </Card>
            <Box
                sx={{
                    marginTop: 1,
                }}
                className='fadeIn'
            >
                <Typography
                    fontWeight={700}

                >
                    {product.title}
                </Typography>

                <Typography
                    fontWeight={500}
                >
                    ${product.price}
                </Typography>


            </Box>
        </Grid>
    )
}
