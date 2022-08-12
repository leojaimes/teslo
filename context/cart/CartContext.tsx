import { createContext } from 'react';
import { ShippingAddress } from './';
import { ICartProduct } from '../../interfaces';

export interface CartContextProps {
    isLoaded: boolean;
    cart: ICartProduct[]

    numberOfItems: number;
    subTotal: number;
    tax: number;
    total: number;

    
    addProductToCart: (product: ICartProduct ) => void
    removeCartProduct: (product: ICartProduct) => void
    updateCartProduct: (product: ICartProduct) => void

    updateAddress: (address: ShippingAddress) => void;

}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)