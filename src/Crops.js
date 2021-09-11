import React from 'react'

const Crops = ({image, title, organic}) => {
    var imagestyle = {
        background: `url(${image})`,
        backgroundSize: 'cover'
    }
    return (
        <div className="crop" style={imagestyle}>
            <div className="crop-content">
                <div className="crop-text">
                    {organic ? 
                    <p>Organic</p> : <span> </span>}
                    <p>{title}</p>
                </div>
                <div className="buy-btn">Buy Now</div>
            </div>
        </div>
    )
}

export default Crops
