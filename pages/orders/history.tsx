import NextLink from 'next/link'

import { Chip, Grid, Typography, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams, } from '@mui/x-data-grid';
import { ShopLayout } from '../../components/layouts/ShopLayout';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 100

    },
    {
        field: 'fullname',
        headerName: 'Full Name',
        width: 300

    },

    {
        field: 'paid',
        headerName: 'Paid',
        width: 200,
        description: 'Shows if order is paid',
        renderCell: (params: GridValueGetterParams) => {
            return (params.row.paid
                ? <Chip color='success' label='Paid' variant='outlined' />
                : <Chip color='error' label='UnPaid' variant='outlined' />)
        }


    },

    {
        field: 'order',
        headerName: 'Order',
        width: 200,
        description: 'Go to Order',
        sortable: false,
        renderCell: (params: GridValueGetterParams) => {
            return (
                <NextLink href={`/orders/${params.row.id}`} passHref>
                    <Link  underline='always' >Order</Link>
                </NextLink>
            )
        }


    },


];


const rows = [
    { id: 1, paid: true, fullname: 'Fernando Herrera' },
    { id: 2, paid: false, fullname: 'Melissa Flores' },
    { id: 3, paid: true, fullname: 'Hernando Vallejo' },
    { id: 4, paid: false, fullname: 'Emin Reyes' },
    { id: 5, paid: false, fullname: 'Eduardo Rios' },
    { id: 6, paid: true, fullname: 'Natalia Herrera' },
]



const HistoryPage = () => {
    return (
        <ShopLayout title={'Order History - Teslo'} pageDescription={'Order History - Teslo'}>

            <Typography variant='h1' component='h1'>Order History</Typography>
            <Grid container>
                <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        rows={rows}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default HistoryPage