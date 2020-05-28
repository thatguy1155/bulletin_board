
import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => { //pass the props into functional componenets as seen here
    
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-secondary text-light sticky-top">
           <div className="container-fluid d-flex justify-content-space-between">
                <h1><i className={icon}></i>  {title}</h1>
           </div>
            
        </nav>
    )
    
}

//defaultProps are props that take effect if no props are passed in from parent elements
//these will be overwritten by passed in props 
Navbar.defaultProps = {
    title: "Bulletin Board",
    icon: "fas fa-bullhorn"
}

//this will send an error if a prop of the wring type is passed e.g. an array instead of a string
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
