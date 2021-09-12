import React from 'react'
import bgimage from './images/farm.jpg'

const Achievement = ({props, date, month, year, title, CG}) => {
    month = month.substring(0,3)+'.';
    return (
        <div className="achievement">
            <div className="description">
                <div className="date">
                    <p className="day">{date}</p>
                    <div><p>{month}</p><p>{year}</p></div>
                </div>
                <p className="title">{title}</p>
                <p className="representative">{CG}</p>
            </div>
            <img src={props} alt="Image" />
        </div>
    )
}

const Testimonials = ({image, name, designation, info}) => {
    var imagestyle = {
        background: `url(${image})`,
        backgroundSize: 'cover'
    }
    var bgImageStyle = {
        background: `url(${bgimage})`,
        backgroundSize: 'cover'
    }
    return(
        <div className="testimonials" style={bgImageStyle}>
            <div className="individual">
                <div className="individual-image" style={imagestyle}></div>
                <h3>{name}</h3>
                <p>{designation}</p>
            </div>
            <div className="testimonials-info">
                <h3>Testimonials</h3>
                <p>"{info}"</p>
            </div>
            <div className="overlay"></div>
        </div>
    )
}

export {Achievement, Testimonials};