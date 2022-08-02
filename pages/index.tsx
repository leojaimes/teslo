import { Card, CardActionArea, CardActions, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../components/layouts/ShopLayout';
import { initialData } from '../database/products';
import { getImage } from '../utils/get-image';



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

      <Grid container spacing={4}>
        {
          initialData.products.map(
            (product) =>
            (
              <Grid item xs={6} key={product.slug}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      image={getImage(product.images[0])}

                    >

                    </CardMedia>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          )
        }


      </Grid>
    </ShopLayout>
  )
}

export default Home
