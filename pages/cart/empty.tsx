import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
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

                >
                    <Typography>Your cart is empty </Typography>
                </Box>
            </Box>
        </ShopLayout>
    )
}

export default EmptyPage