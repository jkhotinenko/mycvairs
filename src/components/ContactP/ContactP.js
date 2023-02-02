import React from 'react';

const ContactP = (props) => {
    return (
        <div className="contactp">
            <div className="hd">
                {props.name}
            </div>
            <div className="id">
                {props.value}
            </div>
            {/*<ul>*/}
            {/*    <li>Phone</li>*/}
            {/*    <li>+380-50-3026-326</li>*/}
            {/*</ul>*/}
        </div>
    );
};

export
{ContactP};