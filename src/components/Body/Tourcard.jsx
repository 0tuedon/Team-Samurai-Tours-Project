import React, { useState } from 'react';

const Tourcard = ({ Data, deleteTour}) => {

    const [showMore, setShowMore] = useState(false)
    
    return (
        <div className="tour-container">
            <div className="img-container">
                <img src={Data.image}
                alt="" />
            </div>
            <div className="tour-header">
                <div className="tour-header-text">
                    <h4>{Data.name}</h4>
                </div>

                <div className="price">${Data.price}</div>
            </div>
            <div className="tour-description">
                <p className="text">
                    {showMore ? Data.info : `${Data.info.substring(0, 200)}...`}
                    <button onClick={()=>setShowMore(!showMore)} className='see-more'>
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </p>

            </div>
            <div style={{cursor:"pointer"}} className="not-interested">
                <button onClick={()=>deleteTour(Data.name)}>Not Interested</button>
            </div>
        </div>
    )
}
export default Tourcard;