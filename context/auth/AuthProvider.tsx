import { FC, useReducer } from 'react'
import { IUser } from '../../interfaces';
import { AuthContext, AuthReducer } from './'

export interface AuthState {
    isLoggedIn: boolean
    user?: IUser;
}


const Auth_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined

}

interface Props {
    children: JSX.Element | JSX.Element[] | undefined
}



export const AuthProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)


    return (
        <AuthContext.Provider value={{
            ...state
        }}>
            {children}
        </AuthContext.Provider>
    )
}
