
import React from 'react'
import PropTypes from 'prop-types';
import Search from './Search.js'
import Add from './Add.js'
import { connect } from 'react-redux'
import { changeSearch } from '../../actions/searchActions'

//this is the section between the navbar and the results that contains the buttons for search and add 
//it also contains the form for adding a new post and the search bar itself

const Controls = (props) => {
    const { changeSearch,  search } = props

    //change the search type depending on what button you clicked
    const onSearchName = e => {
        changeSearch('name')
    }

    const onSearchContent = e => {
        changeSearch('content')
    }
    const onAdd = e => {
        changeSearch('add')
    }

    return (
        <div className="container-fluid">
            <div className="row jumbotron">
                <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                    {search === 'name' && <Search searchBy="name"/>}
                    {search === 'content' && <Search searchBy="content"/>}
                    {search === 'add' && <Add />} 
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2 ">
                    <ul>
                        <li>
                            <button type="button" className="btn btn-outline-light bg-warning text-light btn-lg" value='name'  onClick={onSearchName}>Search By Name</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-outline-light bg-info text-light btn-lg" value='search' onClick={onSearchContent}>Search By Content</button>
                        </li>
                        <li>
                            <button type="button" className="btn btn-outline-light bg-success text-light btn-lg" value='add' onClick={onAdd}>Add Message</button>
                        </li>
                    </ul>        
                </div>
            </div>
        </div>
    )
    
}


Controls.propTypes = {
    changeSearch: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired,
}

//below we connect the values from the state to the component
const mapStateToProps = state => ({
    search: state.search.search, 
})

export default connect(mapStateToProps, {changeSearch})(Controls)
