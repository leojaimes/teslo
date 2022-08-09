import { CartState } from './';



type CartActionType =
 | { type: '[Cart] - ActionName' }



export const CartReducer = (state: CartState, action: CartActionType): CartState => {

   switch (action.type) {
      case '[Cart] - ActionName':

         return {
            ...state,
            }



         default: return state
    }

}