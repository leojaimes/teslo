import React from 'react'
import NextLink from 'next/link'
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from "@mui/material"
import { CartList, OrderSummary } from "../../components/cart"
import { ShopLayout } from "../../components/layouts"


const SummaryPage = () => {
    return (
        <ShopLayout title={"Purshase Summary - Teslo"} pageDescription={"Purshase Summary - Teslo"}
        >
            <Typography
                variant='h1'
                component='h1'
            >Purshase Summary</Typography>


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
                        <Box
                            sx={{
                                mt: 3
                            }}
                        >
                            <Button
                                color='secondary'
                                className="circular-btn"
                                fullWidth
                            >
                                Confirm Order
                            </Button>

                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout >
    )
}


export default SummaryPage