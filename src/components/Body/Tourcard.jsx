import React, { useState } from 'react';

const Tourcard = ({ Data, deleteTour}) => {

    const [readMore, setReadMore] = useState(false)
    const [isFade,setIsFade] =useState(false)
    
    return (
        <div className={!isFade?"tour-container":"tour-container-delete"}>
            <div className="img-container">
                <img src={Data.image}
                alt="Team Samurai" />
            </div>
            <div className="tour-header">
                <div className="tour-header-text">
                    <h4>{Data.name}</h4>
                </div>

                <div className="price">${Data.price}</div>
            </div>
            <div className="tour-description">
                <p className="text">
                    {readMore ? Data.info : `${Data.info.substring(0, 200)}...`}
                    <button onClick={()=>setReadMore(!readMore)} className='see-more'>
                        {readMore ? "Read Less" : "Read More"}
                    </button>
                </p>

            </div>
            <div style={{cursor:"pointer"}} className="not-interested">
                <button onClick={()=>{
                setIsFade(true)
                deleteTour(Data.name)}}>Not Interested</button>
            </div>
        </div>
    )
}
export default Tourcard;
