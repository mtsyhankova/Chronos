import React, { useState, /*useEffect, useContext*/ } from 'react';
import ChangeCalendarCircle from '../../Button/CircleButton/ChangeCalendarCircle';
import NewCalendarCircle from '../../Button/CircleButton/NewCalendarCircle';
import NewCalendarForm from '../../Forms/NewCalendarForm/NewCalendarForm';
// import { Context } from "../../../";

import './CalendarsListStyle.css'

const CalendarsList = ({ setCheckEvents,calendarsArray }) => {
    const [isNewCalFormShown, setIsNewCalFormShown] = useState(false);
    // const { store } = useContext(Context)
    return (
        <div className='calendars_box'>
            <NewCalendarCircle isNewCalFormShown={isNewCalFormShown} setIsNewCalFormShown={setIsNewCalFormShown} />
            <div className='calendars_list_box' >
                {calendarsArray.map((calendar, index) =>
                    <ChangeCalendarCircle info={calendar} key={index} setCheckEvents={setCheckEvents} />
                )}
            </div>

            <NewCalendarForm isNewCalFormShown={isNewCalFormShown} />
        </div>
    )
}
export default CalendarsList