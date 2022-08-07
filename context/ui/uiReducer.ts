import { UIState } from './';



type UIActionType =
 | { type: '[UI] - ActionName' }



export const UIReducer = (state: UIState, action: UIActionType): UIState => {

   switch (action.type) {
      case '[UI] - ActionName':

         return {
            ...state,
            }



         default: return state
    }

}