import { FC, useReducer } from 'react'
import { ICartProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'

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

    const addProductToCart = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Update products in cart', payload: [] })
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
