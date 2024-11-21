import React, { useState, useEffect } from 'react';
import calendarImage from "../../../assets/calendar/calendar.png"

const ChangeCalendarCircle = ({ info, setCheckEvents }) => {
    const [isShown, setIsShown] = useState(true);

    const showHide = event => {
        let activeCals = localStorage.getItem('active_cals').split(',');
        let index = activeCals.indexOf(info._id);

        if (isShown) {
            setCheckEvents(info._id + 'false')
            setIsShown(false);
            activeCals.splice(index, 1);
        }
        else {
            setCheckEvents(info._id + 'true')
            setIsShown(true);
            activeCals.push(info._id);
        }

        localStorage.setItem('active_cals', activeCals);
    }

    useEffect(() => {
        let activeCals = localStorage.getItem('active_cals');
        let index = activeCals.indexOf(info._id);
        if(index === -1) {
            setIsShown(false);
        }
    }, [])

    return (
        <div>
            <div onClick={showHide} className={isShown ? 'cal_shown circle circle2' : 'circle circle2'} style={{ backgroundColor: info.color }}>
                <img src={calendarImage} alt="calendarImage" className='calendarImage' />
                <div className='title_name_c'>{info.title}</div>
            </div>
        </div>

    )
}
export default ChangeCalendarCircle