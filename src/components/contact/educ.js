import React from 'react';
import {EducP} from './educP'

const Educ = () => {
    return (
        <div className="educ">
            Education

            <EducP name='1993-1998' value='Kharkiv State University' position='Radiophisics and Electronic'/>
            <EducP name='2022-2023' value='OKTEN Group' position='Java Developer'/>
            <div className='nl'>

            </div>
        </div>
    );
};

export {Educ};