import React, { useState, useContext } from 'react';
import { Context } from "../../../";

import './NewCalendarFormStyle.css'

const NewCalendarForm = ({ isNewCalFormShown }) => {
    const [title, setTitle] = useState([]);
    const [color, setColor] = useState([]);
    const [error, setError] = useState('');
    const { store } = useContext(Context)

    const newCalFunc = async event => {
        try {
            store.newCalendar(title, color);
        }
        catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={newCalFunc}  className={isNewCalFormShown ? 'shown_form newcal_page' : 'hidden_form newcal_page'}>
                <span className='newcal_pagetitle'>New calendar</span>

                <div className='newcal_login'>
                    <span className='newcal_span'>Name</span>
                    <input className='newcal_input' required type="text" placeholder='enter name...' onChange={e => setTitle(e.target.value)} />
                    <input type="color" onChange={e => setColor(e.target.value)} />
                </div>

                <div className='newcal_error'>{error}</div>

                <div className='aboba'><button className='newcal_button'>Create</button></div>
            </form>
        </div>
    )
}
export default NewCalendarForm