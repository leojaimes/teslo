import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link, Chip } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
    return (
        <ShopLayout title={`Order Summary ${123}  - Teslo`} pageDescription={`Order Summary ${123}  - Teslo`} >

            {/*<Chip
                sx={{ my: 2 }}
                label='Outstanding'
                variant='outlined'
                color='error'
                icon={<CreditCardOffOutlined />}
            />*/}

            <Chip
                sx={{ my: 2 }}
                label='Paid'
                variant='outlined'
                color='success'
                icon={<CreditScoreOutlined />}
            />

            <Typography
                variant='h1'
                component='h1'
            >Order {``}</Typography>


            <Grid
                container
            >

                <Grid
                    item
                    xs={12} sm={7}
                >
                    <CartList />
                </Grid>

                <Grid
                    item
                    xs={12} sm={5}
                >
                    <Card
                        className="summary-card"
                    >
                        <CardContent>
                            <Typography
                                variant='h2'

                            >Summary 3 products</Typography>
                        </CardContent>
                        <Divider sx={{ my: 1 }} />
                        {/**Order Summary */}

                        <Box display='flex' justifyContent='space-between' >

                            <Typography variant='subtitle1'>Delivery Address</Typography>
                            <NextLink href={`/checkout/address`} passHref>
                                <Link underline='always' >Edit</Link>
                            </NextLink>

                        </Box>
                        <Typography >Leo J.E.</Typography>
                        <Typography >address 123</Typography>
                        <Typography >Bucaramega, CO, 123</Typography>
                        <Typography >Colombia</Typography>
                        <Typography >+1 8989898</Typography>


                        <Divider sx={{ my: 1 }} />

                        <Box display='flex' justifyContent='end' >
                            <NextLink href={`/cart`} passHref>
                                <Link underline='always' >Edit</Link>
                            </NextLink>
                        </Box>


                        <OrderSummary />
                        <Box sx={{ mt: 3 }}>
                            {/**TODO: */}
                            {/**<h1>Pay</h1> */}

                            <Chip
                                sx={{ my: 2 }}
                                label='Paid'
                                variant='outlined'
                                color='success'
                                icon={<CreditScoreOutlined />}
                            />


                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout >
    )
}

export default OrderPage