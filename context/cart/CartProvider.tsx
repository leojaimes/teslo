import { FC, useEffect, useReducer } from 'react'

import axios from 'axios';
import Cookie from 'js-cookie'


import { ICartProduct, IOrder } from '../../interfaces'
import { CartContext, cartReducer } from './'
import { tesloApi } from '../../api';

 




export interface CartState {
    isLoaded: boolean;
    cart: ICartProduct[]
    numberOfItems: number
    subTotal: number
    tax: number
    total: number
    shippingAddress?: ShippingAddress
    
}


export interface ShippingAddress {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    zip: string;
    city: string;
    country: string;
    phone: string;
}



const CART_INITIAL_STATE: CartState = {
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,
    isLoaded: false,
    shippingAddress: undefined


}

interface Props {
    children: JSX.Element | JSX.Element[] | undefined
}



export const CartProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)


    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }


    }, []);



    useEffect(() => {
        /*try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }*/
        //Cookie.set('cart', JSON.stringify(state.cart));

        console.log('cart changed')
        //if(state.cart.length > 0 )
        Cookie.set('cart', JSON.stringify(state.cart));

        const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
        console.log('cookies')
        console.log(cookieProducts)

    }, [state.cart]);


    useEffect(() => {

        const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0);
        const subTotal = state.cart.reduce((prev, current) => (current.price * current.quantity) + prev, 0);
        const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * (taxRate + 1)
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
    }, [state.cart]);




    const addProductToCart = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Update products in cart', payload: product })


    }
    const removeCartProduct = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product });

    }

    const updateCartProduct = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Update Product In Cart', payload: product });

    }


    const updateAddress = (address: ShippingAddress) => {
        Cookie.set('firstName', address.firstName);
        Cookie.set('lastName', address.lastName);
        Cookie.set('address', address.address);
        Cookie.set('address2', address.address2 || '');
        Cookie.set('zip', address.zip);
        Cookie.set('city', address.city);
        Cookie.set('country', address.country);
        Cookie.set('phone', address.phone);

        dispatch({ type: '[Cart] - Update Address', payload: address });
    }



    const createOrder = async():Promise<{ hasError: boolean; message: string; }> => {

        if ( !state.shippingAddress ) {
            throw new Error('No hay dirección de entrega');
        }

        const body: IOrder = {
            orderItems: state.cart.map( p => ({
                ...p,
                size: p.size!
            })),
            shippingAddress: state.shippingAddress,
            numberOfItems: state.numberOfItems,
            subTotal: state.subTotal,
            tax: state.tax,
            total: state.total,
            isPaid: false
        }


        try {
            
            const { data } = await tesloApi.post<IOrder>('/orders', body);

            dispatch({ type: '[Cart] - Order complete' });

            return {
                hasError: false,
                message: data._id!
            }


        } catch (error) {
            if ( axios.isAxiosError(error) ) {
                return {
                    hasError: true,
                    message: 'Errroy trying to complete order'
                }
            }
            return {
                hasError: true,
                message : 'Error no controlado, hable con el administrador'
            }
        }

    }


    return (
        <CartContext.Provider value={{
            ...state,


            addProductToCart,
            removeCartProduct,
            updateCartProduct,
            updateAddress,
            createOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}
