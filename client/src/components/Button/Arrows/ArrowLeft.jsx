import React from 'react';
import './ArrowsStyle.css'

const ArrowLeft = ({ lastMonth }) => {
    return (
        <div className='arrow_side' onClick={lastMonth}>
            <div className='arrows left'></div>
        </div>
    )
}
export default ArrowLeft