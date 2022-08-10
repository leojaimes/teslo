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
        console.log( cookieProducts)

    }, [state.cart]);



    const addProductToCart = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Update products in cart', payload: product })
        /*setTimeout(() => {
            Cookie.set('cart', JSON.stringify(state.cart));
        }, 100)*/

    }
    const removeCartProduct = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Remove product in cart', payload: product });
        /*setTimeout(() => {
            Cookie.set('cart', JSON.stringify(state.cart));
        }, 100)*/
    }

    const updateCartProduct = (product: ICartProduct) => {
        dispatch({ type: '[Cart] - Update Product In Cart', payload: product });
        /*setTimeout(() => {
            Cookie.set('cart', JSON.stringify(state.cart));
        }, 100)*/
    }




    return (
        <CartContext.Provider value={{
            ...state,


            addProductToCart,
            removeCartProduct,
            updateCartProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}
