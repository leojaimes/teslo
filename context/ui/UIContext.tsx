import { createContext } from 'react';

export interface ContextProps {
     isMenuOpen: boolean
     toogleSideMenu: () => void

}

export const UIContext = createContext<ContextProps>({} as ContextProps)