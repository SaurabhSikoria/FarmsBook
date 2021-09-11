import React from 'react'

const Achievement = ({props, date, title, CG}) => {
    return (
        <div className="achievement">
            <div className="description"></div>
            <img src={props} alt="Image" />
        </div>
    )
}

export default Achievement
