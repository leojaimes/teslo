import { FC, useReducer } from 'react'
import { AuthContext, AuthReducer  } from './'

export interface AuthState {
    property: boolean
}


const Auth_INITIAL_STATE :  AuthState  = {
  property: false,

}

interface Props {
   children : JSX.Element | JSX.Element[] | undefined
}

 

export const AuthProvider: FC<Props> = ({ children }) => {

  const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE)


  return (
     <AuthContext.Provider  value={{
        ...state
     }}>
        { children }
     </AuthContext.Provider>
  )
}
