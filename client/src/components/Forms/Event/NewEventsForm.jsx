import React, { useState, useEffect, useContext } from 'react';
import { Context } from "../../../";

import clockImg from "../../../assets/calendar/FormEvent/clock_dark.png"
import locationImg from "../../../assets/calendar/FormEvent/location_dark.png"
import descriptionImg from "../../../assets/calendar/FormEvent/contract_dark.png"
import remindImg from "../../../assets/calendar/FormEvent/remind_dark.png"
import calendarImg from "../../..//assets/calendar/calendar_dark.png"
import taskImg from "../../../assets/calendar/FormEvent/task.png"
import arrangementImg from "../../../assets/calendar/FormEvent/arrangement.png"
import reminderImg from "../../../assets/calendar/FormEvent/event.png"
import ArrowDown from "../../Button/Arrows/ArrowDown"

import './NewEventFormStyle.css'

const NewEventsForm = () => {
    const [startsArray, setStartsArray] = useState([]);
    const [endsArray, setEndsArray] = useState([]);
    const [start, setStart] = useState('00:00');
    const [end, setEnd] = useState('00:00');

    const [isCalendarDropdownShown, setIsCalendarDropdownShown] = useState(false);
    const [isEventTypeDropdownShown, setIsEventTypeDropdownShown] = useState(false);
    const [isDropdownShown, setIsDropdownShown] = useState(false);
    const [isDropdownShown2, setIsDropdownShown2] = useState(false);
    const [isDropdownShown3, setIsDropdownShown3] = useState(false);

    const [isSelectActive, setIsSelectActive] = useState(false);

    const [remindValue, setRemindValue] = useState('5m');
    const eventTypesArray = [
        'task',
        'reminder',
        'arrangement'
    ]
    const remindArray = [
        '5m',
        '15m',
        '30m',
        '1h',
        '3h'
    ]
    const [calendarsArray, setCalendarsArray] = useState([]);
    const { store } = useContext(Context)

    const [calName, setCalName] = useState('');
    const [eventType, setEventType] = useState('');
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventPlace, setEventPlace] = useState('');
    const [eventStartDate, setEventStartDate] = useState('');
    const [eventEndDate, setEventEndDate] = useState('');
    const [error, setError] = useState('');
    const [typeEventImg, setTypeEventImg] = useState(taskImg)// константа где  меняется картинка в зависимости от типа 

    const SaveNewEvent = async event => {
        event.preventDefault();
        if (calName === '' || eventType === '' || eventName === '' || eventDesc === '' || eventPlace === '' || eventStartDate === '' || eventEndDate === '') {
            setError('One field is empty');
        }
        else {
            await store.newEvent(eventName, eventType, eventDesc, `${eventStartDate}T${start}:00.000Z`, `${eventEndDate}T${end}:00.000Z`, calName);
            setError('New event created');
        }
    }

    useEffect(() => {
        async function getCalendars() {
            const aboba = await store.getCalendars();
            setCalendarsArray(aboba)
        }
        getCalendars()

        switch (eventType) {
            case 'task': setTypeEventImg(taskImg); break;
            case 'reminder': setTypeEventImg(reminderImg); break;
            case 'arrangement': setTypeEventImg(arrangementImg); break;
            default: break;
        }
    }, [store, eventType])

    const showCalendarDropdown = event => {
        if (!isSelectActive) {
            if (isCalendarDropdownShown)
                setIsCalendarDropdownShown(false);
            else {
                setIsCalendarDropdownShown(true);
            }
        }
    }

    const showEventTypeDropdown = event => {
        if (!isSelectActive) {
            if (isEventTypeDropdownShown)
                setIsEventTypeDropdownShown(false);
            else {
                setIsEventTypeDropdownShown(true);
            }
        }
    }

    const showDropdown = event => {
        if (!isSelectActive) {
            if (isDropdownShown)
                setIsDropdownShown(false);
            else {
                setIsDropdownShown(true);
            }
        }
    }

    const showDropdown2 = event => {
        if (!isSelectActive) {
            if (isDropdownShown2)
                setIsDropdownShown2(false);
            else {
                setIsDropdownShown2(true);
            }
        }
    }

    const showDropdown3 = event => {
        if (isDropdownShown3)
            setIsDropdownShown3(false);
        else {
            setIsDropdownShown3(true);
        }
    }

    const isSelectActiveChange = event => {
        if (isSelectActive) {
            setIsSelectActive(false);
        }
        else {
            setIsSelectActive(true);
            setStart('00:00');
            setEnd('00:00');
        }
    }

    function chooseStart(val) {
        setStart(val);

        let i = 0;
        while (startsArray[i] !== val) {
            i++;
        }
        setEnd(startsArray[i + 1]);
        setEndsArray(startsArray.slice(i + 1));
    }

    useEffect(() => {
        let array = ['00:00'],
            h1 = 0,
            h2 = 0,
            mm = '00';

        while (h1 !== 2 || h2 !== 4) {
            if (mm === '30') {
                mm = '00';
                if (h2 === 9) {
                    h2 = 0;
                    h1 += 1;
                }
                else {
                    h2 += 1;
                }
            }
            else {
                mm = '30';
            }

            array.push(`${h1}${h2}:${mm}`);
        }

        setStartsArray(array);
        setEndsArray(array);
    }, [])

    return (
        <div className='aaaa' >
            <form>
                <div className='header_esf'>
                    <button>Delete</button>
                    <button onClick={SaveNewEvent}>Save</button>
                    <div className='column_ef remind_esf'>
                        <img src={remindImg} alt="ima" className='image_evf' />
                        <p className='fonts fonts_evs'>Remind me:</p>

                        <div className='column_ef time_box_enterval_ef' onClick={showDropdown3}>
                            <input type=" text" className='date_input_evf' value={remindValue} disabled />
                            <ArrowDown />
                            <div className={isDropdownShown3 ? 'remind event_form_dropdown shown' : 'remind event_form_dropdown hidden'}>
                                {remindArray.map(remindItem =>
                                    <div className='event_form_time' key={remindItem} onClick={() => setRemindValue(remindItem)}><p>{remindItem}</p></div>
                                )}
                            </div>
                        </div>
                    </div>
                    <input id="trigger" type="checkbox" />
                    <label htmlFor="trigger" className="checker"></label>
                </div>
                <h2 className='inf_esf'>INFO</h2>
                <div className='input_row_box_ef'>

                    <div className='input_box_esf'>
                        <div className='column_ef cal_and_type'>
                            <img src={calendarImg} alt="avatar" className='image_esf' />
                            <div className="arrow_esf column_ef" onClick={showCalendarDropdown}>
                                <label className='lable_cal_esf'>Calendar:</label>
                                <input type=" text" className='date_input_evf' required value={calName} disabled />
                                <ArrowDown />
                                <div className={isCalendarDropdownShown ? 'cal_box_hidden  shown' : 'cal_box_hidden  hidden'}>
                                    {calendarsArray.map((calNamesItem, idx) =>
                                        <div className='event_form_time' key={idx} onClick={() => { setCalName(calNamesItem.title); }}><p>{calNamesItem.title}</p></div>
                                    )}
                                </div>
                            </div>
                            <div className="arrow_esf column_ef" onClick={showEventTypeDropdown}>
                                <label className='lable_type_esf'>Event Type:</label>
                                <input type=" text" className='date_input_evf' required value={eventType} disabled />
                                <ArrowDown />
                                <div className={isEventTypeDropdownShown ? 'cal_box_hidden  shown' : 'cal_box_hidden  hidden'}>
                                    {eventTypesArray.map((eventTypeItem, idx) =>
                                        <div className='event_form_time' key={idx} onClick={() => { setEventType(eventTypeItem); }}><p>{eventTypeItem}</p></div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div className='column_ef'>
                            <img src={typeEventImg} alt="avatar" className='image_ef' />
                            <input placeholder='Name of the event' onChange={e => setEventName(e.target.value)} />

                        </div>
                        <div className='column_ef'>
                            <img src={descriptionImg} alt="avatar" className='image_ef' />
                            <input type="text" placeholder='Description' onChange={e => setEventDesc(e.target.value)} />
                        </div>
                        <div className='column_ef'>
                            <img src={locationImg} alt="avatar" className='image_ef' />
                            <input type="text" placeholder='Place' onChange={e => setEventPlace(e.target.value)} />
                        </div>
                        <div className='column_ef'>
                            <img src={clockImg} alt="avatar" className='image_ef' />
                            <div>
                                <div className='column_ef'>
                                    <div className='column_ef data_esf'>
                                        <label htmlFor="" className='text_data_esf'>Start:</label>
                                        <input type="date" onChange={e => setEventStartDate(e.target.value)} />
                                    </div>

                                    <div className='column_ef time_box_enterval_ef' onClick={showDropdown}>
                                        <input type="text" className='date_input_ef' value={start} onChange={e => setStart(e.target.value)} disabled={isSelectActive ? true : false} /><ArrowDown />
                                        <div className={isDropdownShown ? 'event_form_dropdown shown' : 'event_form_dropdown hidden'}>
                                            {startsArray.map(timeItem =>
                                                <div className='event_form_time' key={timeItem} onClick={() => chooseStart(timeItem)}><p>{timeItem}</p></div>
                                            )}
                                        </div>
                                    </div>
                                    <input type='checkbox' onChange={e => isSelectActiveChange(e.target.value)} className='all_day_esf' />
                                    <p className='fonts'>All day</p>
                                </div>
                                <div className='column_ef'>
                                    <div className='column_ef data_esf'>
                                        <label htmlFor="" className='text_data_esf'>End:</label>
                                        <input type="date" onChange={e => setEventEndDate(e.target.value)} />
                                    </div>

                                    <div className='column_ef time_box_enterval_ef' onClick={showDropdown2}>
                                        <input type=" text" className='date_input_ef' pattern='[0-9]{2}:[0-9]{2}' value={end} onChange={e => setEnd(e.target.value)} disabled={isSelectActive ? true : false} /><ArrowDown />
                                        <div className={isDropdownShown2 ? 'event_form_dropdown shown' : 'event_form_dropdown hidden'}>
                                            {endsArray.map(timeItem =>
                                                <div className='event_form_time' key={timeItem} onClick={() => setEnd(timeItem)}><p>{timeItem}</p></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='auth_error'>{error}</div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <p>People</p>
                        <div>
                            kfoefkekfpef<br />
                            fekfpekf<br />
                            fkpekfpf<br />
                        </div>
                        <div>
                            <button>Share an event</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}
export default NewEventsForm