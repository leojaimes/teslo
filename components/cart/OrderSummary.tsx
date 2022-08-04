import { Grid, Typography } from '@mui/material'
import React from 'react'

export const OrderSummary = () => {
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
                    3
                </Typography>

            </Grid>


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
                    3
                </Typography>

            </Grid>

            
        </Grid>
    )
}
