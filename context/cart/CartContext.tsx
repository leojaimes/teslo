import { createContext } from 'react';

export interface CartContextProps {
     prop1: boolean

}

export const CartContext = createContext<CartContextProps>({} as CartContextProps)