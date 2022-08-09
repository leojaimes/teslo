import React, { FC, useContext, useState } from 'react'


import { Box, Button, Chip, Grid, Typography } from '@mui/material';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { ProductSlideShow, SizeSelector } from '../../components/products';
import { FullScreenLoading, ItemCounter } from '../../components/ui';
import { ICartProduct, IProduct } from '../../interfaces';
//import { GetServerSideProps } from 'next'
//import { getProductBySlug } from '../../database/dbProducts';
import { dbProducts, } from '../../database';

import { GetStaticProps } from 'next'
import { GetStaticPaths } from 'next'
import { ISize } from '../../interfaces/product';
import { fontSize } from '@mui/system';
import { CartContext } from '../../context/cart/CartContext';


//const product = initialData.products[0]


interface Props {
    product: IProduct

}

const ProductPage: NextPage<Props> = ({ product }) => {


    const router = useRouter()

    const { addProductToCart } = useContext(CartContext)

    const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({

        _id: product._id,
        image: product.images[0],
        price: product.price,
        size: undefined,
        slug: product.slug,
        title: product.title,
        gender: product.gender,
        quantity: 1,
    })

    const onChangeProductSize = (size: ISize) => {
        console.log(size)
        setTempCartProduct({
            ...tempCartProduct,
            size: size,
        })
    }

    const onClickMinus = () => {

        if (tempCartProduct.quantity - 1 < 1) {
            return
        }
        setTempCartProduct({
            ...tempCartProduct,
            quantity: tempCartProduct.quantity - 1,
        })

    }

    const onClickPlus = () => {
        if (tempCartProduct.quantity + 1 > product.inStock) {
            return
        }
        setTempCartProduct({
            ...tempCartProduct,
            quantity: tempCartProduct.quantity + 1,
        })
    }

    const onClickAddToCart = () => {
        if (!tempCartProduct.size) {
            return
        }

        addProductToCart({
          ...tempCartProduct
        })
        router.push(`/cart`)
    }


    return (


        <ShopLayout title={`${product.title}`} pageDescription={`this is a ${product.title}`}
        >

            {
                !product
                    ? <FullScreenLoading />
                    :

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
                                        Quantity
                                    </Typography>
                                    <ItemCounter
                                        value={tempCartProduct.quantity}
                                        onClickMinus={onClickMinus}
                                        onClickPlus={onClickPlus}

                                    />
                                    <SizeSelector
                                        sizes={product.sizes}
                                        selectedSize={tempCartProduct.size}
                                        onClick={onChangeProductSize}
                                    />

                                </Box>


                                {/**Add To cart */}

                                {
                                    product.inStock > 0 ?
                                        (
                                            <Button
                                                color='secondary'
                                                className='circular-btn'
                                                onClick={onClickAddToCart}

                                            >
                                                {
                                                    tempCartProduct.size ? `Add to cart` : `Select Size`
                                                }
                                            </Button>


                                        )
                                        :

                                        (


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
            }

        </ShopLayout>
    )
}



// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time


/*export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const { slug = '' } = ctx.params as { slug: string };

    const product = await getProductBySlug(slug) // your fetch function here 


    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            product
        }
    }
}*/


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    //const { data } = await  // your fetch function here 


    const productSlugs = await dbProducts.getAllProductSlugs();


    return {
        paths: productSlugs.map(({ slug }) => ({
            params: {
                slug
            }
        })),
        fallback: 'blocking'
    }


}


// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.



export const getStaticProps: GetStaticProps = async (ctx) => {
    //const { data } = await  // your fetch function here 
    const { slug = '' } = ctx.params as { slug: string };

    const product = await dbProducts.getProductBySlug(slug)

    if (!product) {
        return {
            redirect: {
                destination: '/',
                permanent: false // it could be that tomorrow the product exists
            }
        }
    }


    return {
        props: {
            product
        },
        revalidate: 60 * 60 * 24
    }
}

export default ProductPage