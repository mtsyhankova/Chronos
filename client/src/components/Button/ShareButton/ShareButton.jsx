import React from 'react';
import './ShareButtonStyle.css'

const ShareButton = ({ title, linkShare }) => {
    return (
        <button className='buttom_share' onClick={linkShare}>{title}</button>

    )
}
export default ShareButton