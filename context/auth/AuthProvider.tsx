import Cookies from 'js-cookie';
import { FC, useEffect, useReducer } from 'react'
import { tesloApi } from '../../api';
import { IUser } from '../../interfaces';
import { AuthContext, AuthReducer } from './'
import axios, { AxiosError } from 'axios';


export interface AuthState {
    isLoggedIn: boolean
    user?: IUser;
}


const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined

}

interface Props {
    children: JSX.Element | JSX.Element[] | undefined
}



export const AuthProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer(AuthReducer, AUTH_INITIAL_STATE)


    const loginUser = async (email: string, password: string): Promise<boolean> => {

        try {
            const { data } = await tesloApi.post('/user/login', { email, password });
            const { token, user } = data;
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) {
            return false;
        }


    }

    const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean; message?: string }> => {



        useEffect(() => {
            checkToken();
        }, [])

        
        const checkToken = async () => {

            try {
                const { data } = await tesloApi.get('/user/validate-token');
                const { token, user } = data;
                Cookies.set('token', token);
                dispatch({ type: '[Auth] - Login', payload: user });
            } catch (error) {
                Cookies.remove('token');
            }
        }

        try {
            const { data } = await tesloApi.post('/user/register', { name, email, password });
            const { token, user } = data;
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return {
                hasError: false
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {

                return {
                    hasError: true,
                    message: error.message
                }
            }

            return {
                hasError: true,
                message: 'No se pudo crear el usuario - intente de nuevo'
            }
        }


    }



    return (
        <AuthContext.Provider value={{
            ...state,
            loginUser,
            registerUser

        }}>
            {children}
        </AuthContext.Provider>
    )
}
