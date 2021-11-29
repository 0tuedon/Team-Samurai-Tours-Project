import React from 'react';
import Button from '../ui/Button';
import Image from "../ui/Image";

const Tourcard = () => {
    return (
        <main>
            <div className="single-tour app">
                <Image image="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg"/>
                <div className="body">
                    <div className="tour-info">
                        <h4>Best of Title</h4>
                        <span className="tour-price">Amount</span>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vitae error vero ullam. 
                        Explicabo ab earum, mollitia saepe ullam eveniet, minima voluptatibus ducimus modi fugiat expedita 
                        eligendi officiis, nihil quas?
                    </p>
                    <Button />
                </div>
            </div>
        </main>
    );
}
 
export default Tourcard;