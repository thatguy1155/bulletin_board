import { combineReducers } from 'redux'
import postReducer from './postReducer'
import searchReducer from './searchReducer'


//this is how you send all the reducers back to the store
export default combineReducers({
    posts: postReducer,
    search: searchReducer
})