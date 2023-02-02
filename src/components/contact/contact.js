import React from 'react';
import {ContactP} from "../ContactP/ContactP";

const Contact = () => {
    return (
        <div className='mn'>
        <div className="contact">
            Contact
        </div>
            <ContactP name='Phone' value='+38-050-3026-326'/>
            <ContactP name='Email' value='jkhotinenko@gmail.com'/>
            <ContactP name='Site' value='www.entexo.com'/>
            <ContactP name='Address' value='Rogachevo, Ecostar1, Bulgaria'/>
        </div>
    );
};

export
{Contact};