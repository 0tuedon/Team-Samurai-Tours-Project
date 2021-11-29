import React from 'react';
import Tourcard from './Tourcard';

const Tour = () => {
    return (
        <div className="body">
            <div className="title">
                <h2>Our Tours</h2>
                <hr className="underline"/>
            </div>
            <Tourcard />
        </div>
    );
}
 
export default Tour;