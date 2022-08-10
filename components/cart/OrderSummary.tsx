import { Grid, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { CartContext } from '../../context/cart/CartContext';

export const OrderSummary = () => {

    const { numberOfItems, subTotal, total, tax, } = useContext(CartContext)
    return (
        <Grid
            container
        >
            <Grid
                item
                xs={6}
            >
                <Typography
                >
                    Num. Products
                </Typography>

            </Grid>
            <Grid
                item
                xs={6}
                display='flex'
                justifyContent='end'
            >
                <Typography
                >
                    { numberOfItems }
                </Typography>

            </Grid>


            <Grid
                item
                xs={6}
            >
                <Typography
                >
                    SubTotal
                </Typography>

            </Grid>
            <Grid
                item
                xs={6}
                display='flex'
                justifyContent='end'
            >
                <Typography
                >
                    {`$${ subTotal }`}
                </Typography>

            </Grid>


            <Grid
                item
                xs={6}
            >
                <Typography
                >
                    Taxes {`15%`}
                </Typography>

            </Grid>
            <Grid
                item
                xs={6}
                display='flex'
                justifyContent='end'
            >
                <Typography
                >
                    {`$${tax}`}
                </Typography>

            </Grid>


            <Grid
                item
                xs={6}
            >
                <Typography
                    variant='subtitle1'
                >
                    Total
                </Typography>

            </Grid>
            <Grid
                item
                xs={6}
                display='flex'
                justifyContent='end'
            >
                <Typography
                    variant='subtitle1'
                >
                    {`$${total}`}
                </Typography>

            </Grid>


        </Grid>
    )
}
