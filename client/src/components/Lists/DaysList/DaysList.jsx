import React from 'react';
import DayBox from '../../Box/DayBox/DayBox';

import './DaysListStyle.css'

const DaysList = ({ eventsArray, classBoxDay, daysArray, classHoverDay, month }) => {
    return (
        <div className={classBoxDay}>
            {daysArray.map((dayItem) => (
                <DayBox key={dayItem.format('DDMMYYYY')} eventsArray={eventsArray} dayItem={dayItem} classHoverDay={classHoverDay} month={month} />
            ))
            }
        </div>
    )
}
export default DaysList