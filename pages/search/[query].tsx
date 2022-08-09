

import { Box, Card, CardActionArea, CardActions, CardMedia, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ProductList } from '../../components/products';
import { FullScreenLoading } from '../../components/ui';
import { useProducts } from '../../hooks';
import { IProduct } from '../../interfaces';
import { useState } from 'react';

interface Props {
    products: IProduct[];
    foundProducts: boolean;
    query: string;
}


const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {

 
    return (
        <ShopLayout title={'Search - Teslo Shop'} pageDescription={'Found the best products from Teslo Here!!'}     >
            <Typography variant='h1' component='h1'>Search products</Typography>

            {
                foundProducts
                    ? <Typography variant='h2' sx={{ mb: 1 }} textTransform="capitalize">Search for: {query}</Typography>
                    : (
                        <Box display='flex'>
                            <Typography variant='h2' sx={{ mb: 1 }}>No found any product with this description</Typography>
                            <Typography variant='h2' sx={{ ml: 1 }} color="secondary" textTransform="capitalize">{query}</Typography>
                        </Box>
                    )
            }




            <ProductList products={products} />


        </ShopLayout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from 'next'
import {   dbProducts } from '../../database';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    //const { data } = await  // your fetch function here 

    const { query = ''  }   = ctx.params  as { query: string }
  

    if (query.length === 0){
        return {
            redirect: {
                destination: `/`,
                permanent: true,
            }
        }
    }

    let products = await dbProducts.getProductsByTerm(query)
    const foundProducts = products.length > 0

    if(foundProducts){
        products = await dbProducts.getProductsByTerm(query)

    }




    return {
        props: {
            products,
            foundProducts,
            query
        }
    }
}
export default SearchPage
