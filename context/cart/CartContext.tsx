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
    shippingAddress?: ShippingAddress,
    
    addProductToCart: (product: ICartProduct ) => void
    removeCartProduct: (product: ICartProduct) => void
    updateCartProduct: (product: ICartProduct) => void

    updateAddress: (address: ShippingAddress) => void;
    createOrder: () => Promise<{ hasError: boolean; message: string; }>;

}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)