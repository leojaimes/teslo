import { createContext } from 'react';

export interface AuthContextProps {
     prop1: boolean

}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)