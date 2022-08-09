import { FC, useReducer } from 'react'
import { CartContext, CartReducer  } from './'

export interface CartState {
    prop1: boolean
}


const Cart_INITIAL_STATE :  CartState  = {
    prop1: false,

}

interface Props {
   children : JSX.Element | JSX.Element[] | undefined
}

 

export const CartProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(CartReducer, Cart_INITIAL_STATE)


  return (
     <CartContext.Provider  value={{
        ...state
     }}>
        { children }
     </CartContext.Provider>
  )
}
