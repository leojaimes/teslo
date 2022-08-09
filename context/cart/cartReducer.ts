import { ICartProduct } from '../../interfaces';
import { CartState } from './';



type CartActionType =
    | { type: '[Cart] - Update products in cart', payload: ICartProduct  }
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }




export const cartReducer = (state: CartState, action: CartActionType): CartState => {

    switch (action.type) {
        
        case '[Cart] - LoadCart from cookies | storage':

            return {
                ...state
            }
        case '[Cart] - Update products in cart':
            {
                let cart: ICartProduct[] = []
                let addSameArticle = false
                cart = state.cart.map(product => {
                    if (product._id === action.payload._id) {
                        if (product.size === action.payload.size) {
                            addSameArticle = true
                            return {
                                ...product,
                                quantity: action.payload.quantity + product.quantity

                            }
                        }
                    }
                    return {
                        ...product
                    }
                })


                let newState = {
                    ...state,
                    cart: [...state.cart, action.payload]

                }
                if (addSameArticle) {
                    newState = {
                        ...state,
                        cart
                    }

                }




                console.log(newState)
                return newState

            }







        default: return state
    }

}