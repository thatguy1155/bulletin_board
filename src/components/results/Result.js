import React from 'react'
import PropTypes from 'prop-types';

//take the info passed in from results and put on a card
const Result = ({user: { content, nickName }}) => {

    return (
        
        <div className="card text-center bg-success text-light">
            <div className="card-body">
                <h4 className="card-title">{nickName}</h4>
                <p className="card-text">{content}</p>
            </div>
        </div>
     
    )
    
}

Result.propTypes = {
    user: PropTypes.object.isRequired //just enter ptor
}

export default Result
