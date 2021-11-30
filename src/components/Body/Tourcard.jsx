import React from 'react';
const Tourcard = (props) => {
    console.log(props.Data)    
    return (
        <div className="tour-container">
            <div className="img-container">
                <img src={props.Data.image}
                alt="" />
            </div>
            <div className="tour-header">
                <div className="tour-header-text">
                    <h4>{props.Data.name}</h4>
                </div>

                <div className="price">${props.Data.price}</div>
            </div>
            <div className="tour-description">
                <p className="text">{props.Data.info}
                    <button className='see-more'>See More</button>
                </p>

            </div>
            <div className="not-interested">
                <button>Not Interested</button>
            </div>
        </div>
    )
}
export default Tourcard