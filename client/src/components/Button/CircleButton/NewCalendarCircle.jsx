import React from 'react';
import './NewCalendarCircleStyle.css'

const NewCalendarCircle = ({ isNewCalFormShown, setIsNewCalFormShown }) => {
    const showHide = event => {
        if (isNewCalFormShown)
            setIsNewCalFormShown(false);
        else
            setIsNewCalFormShown(true);
    }

    return (
        <div className='new_cal_circle circle' onClick={showHide}></div>
    )
}
export default NewCalendarCircle