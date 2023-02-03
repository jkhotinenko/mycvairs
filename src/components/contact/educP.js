import React from 'react';

const EducP = (props) => {
    return (
        <div className="educP">
            <div className="ehd">
                {props.name}
            </div>
            <div className="eid">
                {props.value}
            </div>
            <div className="eps">
                {props.position}
            </div>
        </div>
    );
};
        export {EducP};
