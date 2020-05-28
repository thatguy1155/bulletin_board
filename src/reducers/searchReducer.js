//here it will evaluate any actions that are commmitted

//bring in the types from actions/types
import { CHANGE_SEARCH } from '../actions/types'

//create initial state
const initialState = {
    search: 'name',  
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SEARCH:
            return{
                search: action.payload
            }
        default:
            return state
    }
}