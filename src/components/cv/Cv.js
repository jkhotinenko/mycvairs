import React from 'react';
import {Photo} from "../Photo/Photo";
import {Name} from "../Name/Name";

const Cv = () => {
    return (
        <div className="cv">
            <div className="left">
                <Photo/>

            </div>
            <div className="right">
                <Name/>
            </div>
        </div>
    );
};

export {Cv};