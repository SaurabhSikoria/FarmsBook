import React from 'react'

const Goals = ({title, image}) => {
    return (
        <div className="Goal">
            <p>{title}</p>
            {image}
        </div>
    )
}

export default Goals;
