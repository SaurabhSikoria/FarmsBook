import React from 'react'

const Rating = ({value, props}) => {
    return (
        <div className="Rating">
            <p><span><strong>{value}</strong></span><br />{props}</p>
        </div>
    )
}

export default Rating;
