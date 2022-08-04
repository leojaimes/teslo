import { Grid, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layouts/ShopLayout';


const HistoryPage = () => {
    return (
        <ShopLayout title={'Order History - Teslo'} pageDescription={'Order History - Teslo'}>

            <Typography variant='h1' component='h1'>Order History</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid columns={[]} rows={[]}></DataGrid>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage