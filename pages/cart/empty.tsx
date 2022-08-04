import NextLink from 'next/link'


import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography, Link } from '@mui/material'
import { ShopLayout } from '../../components/layouts/'


const EmptyPage = () => {
    return (
        <ShopLayout title={'Empty Cart '} pageDescription={'There arent articles in cart'} >


            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                height='calc(100vh - 200px)'
                sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
            >
                <RemoveShoppingCartOutlined

                    sx={{
                        fontSize: '100px',

                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}

                >

                    <Typography
                    >Your cart is empty </Typography>

                    <NextLink href={`/`} passHref>
                        <Link
                            typography={'h4'}
                            color='secondary'
                        >
                            Back
                        </Link>
                    </NextLink>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage