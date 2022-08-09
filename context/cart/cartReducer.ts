import { ICartProduct } from '../../interfaces';
import { CartState } from './';



type CartActionType =
    | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
    | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
    | { type: '[Cart] - Add cart', payload: ICartProduct }



export const cartReducer = (state: CartState, action: CartActionType): CartState => {

    switch (action.type) {
        case '[Cart] - Update products in cart':

            return {
                ...state,
            }
        case '[Cart] - LoadCart from cookies | storage':

            return {
                ...state
            }






        default: return state
    }

}