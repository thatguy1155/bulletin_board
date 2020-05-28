import React, { useState } from 'react'
import { filterUsers } from '../../actions/postActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
/**
 *This is the searchbar component.
 * It takes in the props being the kind of search that is selected and the action filterUsers
 */

const Search = (props) => {
    const { filterUsers,search } = props
    //initiate text state to be added to store
    const [text, setText] = useState('')

    //change text value when people type
    const onChange = (e) => {
       setText(e.target.value) 
    }

    //when the search button is clicked send an alert if empty, or run a new search using filterUsers
    const onSubmit = e => {
       e.preventDefault()
       if(text === '') {
           alert('please enter something', 'light')
       } else {
           const searchInfo = {
               text:text,
               method:search
           }
           filterUsers(searchInfo)
       }
    }
    //the value in the search button
    const searchBy = `search by ${search}`
    

       return (
           <div >
               <form style={search === 'name' ? yellow : blue}onSubmit={onSubmit} className="form padding">
               <input type="text" name="text" style={inputStyle}value={text} onChange={onChange} placeholder={search}/>
               <input type="submit" value={searchBy} onClick={onSubmit} className="btn btn-dark btn-block"/>
               </form>
           </div>
       )
    
}

// change the background of the searchbar to match the button and the search type
const inputStyle = {
    width:'100%',
    marginBottom:'10px'
}

const blue = {
    backgroundColor: 'lightBlue',
 
}
const yellow = {
    backgroundColor: 'yellow',
}

//make sure the proper props are being passed through redux
Search.propTypes = {
   filterUsers: PropTypes.func.isRequired,
   posts: PropTypes.array,
}


//below we connect the values from the state to the component
const mapStateToProps = state => ({
    users: state.posts.items,
    search: state.search.search

})

export default connect(mapStateToProps, {filterUsers})(Search)

