import React from 'react';
import {Photo} from "../Photo/Photo";
import {Name} from "../Name/Name";
import {Position} from "../Position/Position";
import {Contact} from "../contact/contact";
import {ContactP} from "../ContactP/ContactP";
import {Educ} from "../contact/educ";

const Cv = () => {
    return (
        <div className="cv">
            <div className="left">

                <Photo/>
                <Contact/>
                  {/*<div>*/}

                  {/*</div>*/}

                <Educ/>
            </div>
            <div className="right">
                <Name/>
                <Position/>

            </div>
            <div className="admin"></div>
        </div>
    );
};

export {Cv};