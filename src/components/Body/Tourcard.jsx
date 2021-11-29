import React from 'react';
import Button from '../ui/Button';

const Tourcard = () => {
    return (
        <div className="vienna">
            <div className="image-display">
                
            </div>
            <div className="tour-details">
                <div className="top-title">
                    <h3>Best of Title</h3>
                    <span className="price">Amount</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae error vero ullam. Explicabo ab earum, mollitia saepe ullam eveniet, minima voluptatibus ducimus modi fugiat expedita eligendi officiis, nihil quas?
                </p>
                <div className="bttn">
                    <Button />
                </div>
            </div>
        </div>
    );
}
 
export default Tourcard;