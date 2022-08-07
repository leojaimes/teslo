import { createContext } from 'react';

export interface ContextProps {
     isMenuOpen: boolean

}

export const UIContext = createContext<ContextProps>({} as ContextProps)