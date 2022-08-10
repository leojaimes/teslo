import { FC, useEffect, useReducer } from 'react'
import { ICartProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'
import Cookie from 'js-cookie'

export interface CartState {
    cart: ICartProduct[]
}


const Cart_INITIAL_STATE: CartState = {
    cart: [],

}

interface Props {
    children: JSX.Element | JSX.Element[] | undefined
}



export const CartProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, Cart_INITIAL_STATE)


 
    useEffect(() => {
        try {
            const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : []
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: cookieProducts });
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from cookies | storage', payload: [] });
        }
    }, []);



    const addProductToCart = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Update products in cart', payload: product })
        Cookie.set('cart', JSON.stringify(state.cart));
    }




    return (
        <CartContext.Provider value={{
            ...state,


            addProductToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
