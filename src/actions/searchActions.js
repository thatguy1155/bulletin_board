import { CHANGE_SEARCH } from './types'




export const changeSearch = (postData) => dispatch => {
    dispatch({
            type: CHANGE_SEARCH,
            payload: postData
        })
    
}

