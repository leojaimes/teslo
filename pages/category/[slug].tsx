import { Card, CardActionArea, CardActions, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';


const CategoriesPage = () => {
    const route = useRouter()
    console.log(route)
    const { products, isLoading } = useProducts(`products?gender=${route.query.slug}`)



    return (
        <ShopLayout title={'Home - Teslo Shop'} pageDescription={'Found the best products from Teslo Here!!'}     >
            <Typography
                component={'h1'}
                variant='h1'
            >
                Shop
            </Typography>

            <Typography
                component={'h2'}
                variant='h2'
                sx={{
                    marginBottom: '1px'
                }}
            >
                All Products
            </Typography>


            {
                isLoading && products
                    ? <FullScreenLoading />
                    : <ProductList products={products} />
            }

        </ShopLayout>
    )
}

export default CategoriesPage
