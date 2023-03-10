import { useContext, useState } from 'react';

import NextLink from 'next/link';

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { UIContext } from '../../context/ui/UIContext';
import { CartContext } from '../../context/cart/CartContext';

export const Navbar = () => {
    const { asPath, push } = useRouter();
    const { toogleSideMenu } = useContext(UIContext)
    const {  numberOfItems } = useContext(CartContext)


    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;
        push(`/search/${searchTerm}`);
    }




    return (
        <AppBar>
            <Toolbar>
                <NextLink href='/' passHref>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Teslo |</Typography>
                        <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                    </Link>
                </NextLink>

                <Box flex={1} />

                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NextLink href='/category/men' passHref>
                        <Link>
                            <Button color={asPath === '/category/men' ? 'secondary' : 'info'}>Hombres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/women' passHref>
                        <Link>
                            <Button color={asPath === '/category/women' ? 'primary' : 'info'}  >Mujeres</Button>
                        </Link>
                    </NextLink>
                    <NextLink href='/category/kid' passHref>
                        <Link>
                            <Button color={asPath === '/category/kid' ? 'primary' : 'info'} >Ni??os</Button>
                        </Link>
                    </NextLink>
                </Box>


                <Box flex={1} />

                {/* Big Screens */}
                {
                    isSearchVisible
                        ? (
                            <Input
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                autoFocus
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                                type='text'
                                placeholder="Buscar..."
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setIsSearchVisible(false)}
                                        >
                                            <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        )
                        :
                        (
                            <IconButton
                                onClick={() => setIsSearchVisible(true)}
                                className="fadeIn"
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                            >
                                <SearchOutlined />
                            </IconButton>
                        )
                }



                {/* Pantallas peque??as */}
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={toogleSideMenu}
                             
                >
                    <SearchOutlined />
                </IconButton>



                <NextLink href="/cart" passHref>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={numberOfItems} color="secondary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>


                <Button
                    onClick={toogleSideMenu}
                >
                    Men??
                </Button>

            </Toolbar>
        </AppBar>
    )
}