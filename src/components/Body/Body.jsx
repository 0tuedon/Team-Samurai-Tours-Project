import React from 'react';
import Ireland from './Ireland';
import Paris from './Paris';
import Rome from './Rome';
import Vienna from './Vienna';

const Body = () => {
    return (
        <div className="body">
            <div className="title">
                Our Tours
            </div>
            <Paris />
            <Ireland />
            <Vienna />
            <Rome />
        </div>
    );
}
 
export default Body;