import { AuthState } from './';



type AuthActionType =
 | { type: '[Auth] - ActionName' }



export const AuthReducer = (state: AuthState, action: AuthActionType): AuthState => {

   switch (action.type) {
      case '[Auth] - ActionName':

         return {
            ...state,
            }



         default: return state
    }

}