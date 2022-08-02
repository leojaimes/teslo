import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import React, { FC } from 'react'
import { Product } from '../../interfaces'
import { getImage } from '../../utils/get-image'

interface Props {
    product: Product
}
export const ProductCard: FC<Props> = ({ product }) => {
    return (
        <Grid item xs={6} key={product.slug}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component='img'
                        image={getImage(product.images[0])}
                        alt={product.title}
                    >
                    </CardMedia>
                </CardActionArea>
            </Card>
        </Grid>
    )
}
