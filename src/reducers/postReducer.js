//here it will evaluate any actions that are commmitted and manipulate the state

//bring in the types from actions/types
import { FETCH_USERS, NEW_USER,FILTER_USERS } from '../actions/types'

//create initial state
const initialState = {
    items: [],  //this will represent the posts that come in from our action (axios request)
}

export default (state = initialState, action) => {
    //when you get an action, evaluate which kind of action it is
    switch(action.type) {
        //if you get the action type of FETCH_USERS, return the state with the items from there
        case FETCH_USERS:
            return{
                ...state,
                items: action.payload
            }
        //add the new user to the items state
        case NEW_USER:
            var newItems = [ ...state.items,action.payload];
            return{
                items: newItems,
            }
        
        case FILTER_USERS:
            //filter out the API results based on the search criteria
            const oldItems = action.payload.oldData
            const filteredItems = oldItems.filter((item) => {
                if (action.payload.method ==='name'){
                    return item.nickName.includes(action.payload.newData);
                } else {
                    return item.content.includes(action.payload.newData);
                }
                
              });
            return{
                items: filteredItems,
            }
        default:
            return state
    }
}