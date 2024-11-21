import React from 'react';
import './ArrowsStyle.css'

const ArrowRight = ({ nextMont }) => {
    return (
        <div className='arrow_side' onClick={nextMont}>
            <div className='arrows right'></div>
        </div>
    )
}
export default ArrowRight