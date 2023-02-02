import React from 'react';

const Expidet = (props) => {
    return (
        <div className='cmpn'>
            <div className='year'>{props.year}</div>
            <div className='comp'><b>{props.comp}</b></div>
            <div className='desc'>{props.desc}</div>
        </div>
    );
};

export{Expidet};