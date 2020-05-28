import React,{ useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createUser } from '../../actions/postActions'

/**
 *This is the form to add a new post .
 * It takes in the props being the function to create a new Post (createUser)
 */

const Postform = (props) => {
    const { createUser } = props  //extract createUser

    //set up the initial text states for the  nickName and content areas of the form
    const [nickName, setNickname] = useState('')
    const [content, setContent] = useState('')

    //change the text states as people type into the textboxes
    const onChangeNickname = (e) => {
        setNickname(e.target.value) //e.target.name works instead of "text" because text is defined as a name in the attributes. this makes this function more flexible if we had multiple text fields
     }

     const onChangeContent = (e) => {
        setContent(e.target.value) //e.target.name works instead of "text" because text is defined as a name in the attributes. this makes this function more flexible if we had multiple text fields
     }

     //when a person clicks the submit button, if the fields are full, then commit the createUser action to add a new post
     const onSubmit = e => {
        if(nickName === ''|| content ==='') {
            alert('please enter something', 'light')
        } else {
            const post = {
                nickName,
                content
            }
            createUser(post)
            setNickname('')
            setContent('')

        }
     }

    return (
        <div className="bg-success text-light padding">
            <h1>Add Post</h1>
            <form action="">
                <div>
                    <label htmlFor="title">nickname</label>
                    <br/>
                    <input type="text" name="title" id="" value={nickName} onChange={onChangeNickname}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="body">message</label>
                    <br/>
                    <textarea name="body" value={content} onChange={onChangeContent}/>
                </div>
                <br/>
                <button type="button" onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

//make sure the props are right
Postform.propTypes = {
    createUser: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

//below we connect the values from the state to the component
const mapStateToProps = state => ({
    posts: state.posts.items //we use posts here because its how the postreducer was defined in root reducer(reducers/index.js) on line 7
})
export default connect(mapStateToProps, {createUser})(Postform)