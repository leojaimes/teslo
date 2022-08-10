import { FC, useEffect, useReducer } from 'react'
import { ICartProduct } from '../../interfaces'
import { CartContext, cartReducer } from './'
import Cookie from 'js-cookie'

export interface CartState {
    cart: ICartProduct[]
    numberOfItems:number
    subTotal: number
    tax: number
    total:  number
}


const CART_INITIAL_STATE: CartState = {
    cart: [],
    numberOfItems: 0,
    subTotal: 0,
    tax: 0,
    total: 0,

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
        console.log( cookieProducts)

    }, [state.cart]);


    useEffect(() => {
        
        const numberOfItems = state.cart.reduce( ( prev, current ) => current.quantity + prev , 0 );
        const subTotal = state.cart.reduce( ( prev, current ) => (current.price * current.quantity) + prev, 0 );
        const taxRate =  Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);
    
        const orderSummary = {
            numberOfItems,
            subTotal,
            tax: subTotal * taxRate,
            total: subTotal * ( taxRate + 1 )
        }

        dispatch({ type: '[Cart] - Update order summary', payload: orderSummary });
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
