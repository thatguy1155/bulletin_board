import { FETCH_USERS, NEW_USER,FILTER_USERS } from './types'
import axios from 'axios'

/**
 *these are the actions that manipulate the cards being displayed.
 * they include all API requests for fetch and add
 */

export const fetchUsers = () => dispatch => {
    //configure token
    const config = {
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWNmMzFlOGFmOTU2MjAwMTFiNmI5OTAiLCJpYXQiOjE1OTA2MzcwMzIsImV4cCI6MTU5MDcyMzQzMn0.8wOnbOCej2I8It5m6Ylg-EgWMcIw001DnkeDsAlV2NY'
        },
    }
    //run get requests and dispatch cooresponding type to be executed in postReducer
    axios.get('http://dauth.daios.net/v1/boards',config)
        .then(posts => dispatch({
            type: FETCH_USERS,
            payload: posts.data.data
        })).catch(err => {
            dispatch({
                //if there's an error, send the user a card saying so
                type: FETCH_USERS,
                payload: [{_id:0,nickName:'error',content:'please contact cutomer service at 010-314-1150'}]
            })
            console.log(err)
        })
    
}
//when user adds a new post to.the board
//add new info to the db and send the response data to the store via postReducer 
export const createUser = (postData) => dispatch => {
    const body = JSON.stringify(postData)
    const request = axios({
        headers: { 
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWNmMzFlOGFmOTU2MjAwMTFiNmI5OTAiLCJpYXQiOjE1OTA2MzcwMzIsImV4cCI6MTU5MDcyMzQzMn0.8wOnbOCej2I8It5m6Ylg-EgWMcIw001DnkeDsAlV2NY',
            'content-type': 'application/json'
        },
        method: 'post',
        url: 'http://dauth.daios.net/v1/boards',
        data: body
    })
    .then(res => {
        let newData = res.data.data;
        dispatch({
            type: NEW_USER,
            payload: {
                _id: newData._id ,
                nickName: newData.nickName,
                content: newData.content
            }
        })
    }).catch(err => {
        dispatch({
            type: FETCH_USERS,
            payload: [{_id:0,nickName:'error',content:'please contact cutomer service at 010-314-1150'}]
        })
        console.log(err)
    })
    
}
//for spedific search results grap the list from the API
//also take in the kind of search and word searched for from the user
//dispatch FILTER USERS to modify the API response pabed on the searched parameters
export const filterUsers = (postData) => dispatch => {
    console.log(postData.method)
    const config = {
        headers: {
            'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZWNmMzFlOGFmOTU2MjAwMTFiNmI5OTAiLCJpYXQiOjE1OTA2MzcwMzIsImV4cCI6MTU5MDcyMzQzMn0.8wOnbOCej2I8It5m6Ylg-EgWMcIw001DnkeDsAlV2NY'
        },
    }
    axios.get('http://dauth.daios.net/v1/boards',config)
        .then(posts =>{
            const fullPayload = {
                oldData: posts.data.data,
                newData: postData.text,
                method: postData.method
            }
            dispatch({
            type: FILTER_USERS,
            payload: fullPayload
        })}).catch(err => {
            dispatch({
                type: FETCH_USERS,
                payload: [{_id:0,nickName:'error',content:'please contact cutomer service at 010-314-1150'}]
            })
            console.log(err)
        }) 
}
