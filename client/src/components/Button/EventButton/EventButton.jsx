import React from 'react';

import { Link } from 'react-router-dom';
import './EventButtonStyle.css'
import eventIcon from "../../../assets/calendar/FormEvent/contract.png"

const EventButton = () => {
    return (
        <Link to='/newevent'>
            <div className='event_button'>
                <img src={eventIcon} alt='aboba' className='event_button_img' />
            </div>
        </Link>

    )
}
export default EventButton