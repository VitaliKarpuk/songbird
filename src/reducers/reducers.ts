import { GET_LIST_OPTIONS } from '../constants/constants';

interface actionType1 {
  type: typeof GET_LIST_OPTIONS, 
  payload:Array<[]>
}

type actionType = actionType1;

export interface Item {
  id: number,
  name: string,
  species: string,
  description: string,
  image: string,
  audio: string
}
export interface stateType {
  listOptions: Array<Item> | []
}



const initialState  = {
  listOptions: [],
}
// type StateType = typeof initialState;

const reducer = (state = initialState, action:actionType)   =>  {
  switch (action.type) {
    case GET_LIST_OPTIONS:
      return { 
        ...state,
        listOptions: action.payload
      }
    default:
      return state  
  }
}

export default reducer;