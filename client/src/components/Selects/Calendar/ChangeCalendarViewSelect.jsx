import React, { useState } from 'react';
import ArrowDown from '../../Button/Arrows/ArrowDown';
import './SelectCalStyle.css'

const ChangeCalendarViewSelect = ({ nowType, setNowType, setNameDayType, nowMoment }) => {
    const typeArray = ['day', 'week', 'month'];
    const [isDropdownShown, setIsDropdownShown] = useState(false);



    const showDropdown = event => {
        if (isDropdownShown)
            setIsDropdownShown(false);
        else {
            setIsDropdownShown(true);
        }
    }
    
    return (
        <div className='year_select' onClick={showDropdown}>
            <p>type: {nowType}</p>
            <ArrowDown />
            <div className={isDropdownShown ? ' type shown' : ' type hidden'}>
                {typeArray.map(type =>
                    <div className={nowType === type ? 'year current' : 'year'}
                        key={type} onClick={() => { setNowType(type) }}>{type}</div>
                )}
            </div>
        </div >
    )
}
export default ChangeCalendarViewSelect