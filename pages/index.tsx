import { Card, CardActionArea, CardActions, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout';
import { ProductList } from '../components/products';
import { initialData } from '../database/products';




initialData
const Home: NextPage = () => {
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

      <ProductList
        products={
          initialData.products
        }

      />
    </ShopLayout>
  )
}

export default Home
