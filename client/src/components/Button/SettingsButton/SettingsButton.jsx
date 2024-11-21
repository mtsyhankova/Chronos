import React from 'react';

import { Link } from 'react-router-dom';
import './SettingsButtonStyle.css'
import eventIcon from "../../../assets/calendar/FormEvent/contract.png"

const SettingsButton = () => {
    return (
        <Link to='/settingscalendar'>
            <div className='settings_button'>
                <img src={eventIcon} alt='aboba' className='event_button_img' />
            </div>
        </Link>

    )
}
export default SettingsButton