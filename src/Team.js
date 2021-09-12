import React from 'react'

const Team = ({image, name, quote}) => {
    var imagestyle = {
        background: `url(${image})`,
        backgroundSize: 'cover'
    }
    return (
        <div>
        <div className="Rating" style={imagestyle}>
        </div>
        <div className="name">
            <h4>{name}</h4>
            <p>"{quote}"</p>
        </div>
        </div>
    )
}

export default Team
