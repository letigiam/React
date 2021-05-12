import React from 'react';
import ChildTwo from '../ChildTwo';
import ChildTwoBis from '../ChildTwoBis';

const ParentTwo = ():JSX.Element =>{
    //console.log('I\'m ParentTwo')

    return <>
        <div>
            <ChildTwo/>
            <ChildTwoBis/>
        </div>
    </>
}
export default ParentTwo