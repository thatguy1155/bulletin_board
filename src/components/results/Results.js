import React, {useEffect} from 'react'
import Result from './Result'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions/postActions'

/**
 *This is the component that shows all the results.
 * It takes in the props being the kind of search that is selected and the action filterUsers
 */

const Results = (props) => {
    const {fetchUsers, users} = props
    useEffect(() => {
        fetchUsers()
        // eslint-disable-next-line
    },[])

    //if there are posts brought in from the store, then display one result item for every item in users
    if(users.length === 0){
        return <h1>No results</h1>
    } else {
        return (
            <div style={userStyle}>
                {users.map(user => (
                    <Result key={user._id} user={user} />
                ))}
            </div>
        ) 
    }
    
}

//make the 3x3 grid where the added posts fall into
const userStyle = {
    padding:'1rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    height:'100%'
}

//make sure the props are right
Results.propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
}

//below we connect the values from the state to the component
const mapStateToProps = state => ({
    users: state.posts.items, //we use posts here because its how the postreducer was defined in root reducer(reducers/index.js) on line 7
})

export default connect(mapStateToProps, {fetchUsers})(Results)
