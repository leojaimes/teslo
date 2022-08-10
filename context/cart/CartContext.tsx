import { createContext } from 'react';
import { ICartProduct } from '../../interfaces';

export interface CartContextProps {
    cart: ICartProduct[]
    addProductToCart: (product: ICartProduct ) => void
    removeCartProduct: (product: ICartProduct) => void
    updateCartProduct: (product: ICartProduct) => void

}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)