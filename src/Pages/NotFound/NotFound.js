import React from 'react';
import fourOFour from './../../images/404.svg';

const NotFound = () =>
{
    return (
        <div className="mx-auto">
            <img src={fourOFour} alt="page not found" />
        </div>
    );
};

export default NotFound;