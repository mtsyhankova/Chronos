import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../";
import EventButton from '../../components/Button/EventButton/EventButton';
import Calendar from '../../components/Calendar/Calendar';
import CalendarsList from '../../components/Lists/CalendarsList/CalendarsList';
import NavigationBar from '../../components/Navigation/NavigationBar';
import SettingsButton from '../../components/Button/SettingsButton/SettingsButton'
import './HomePageStyle.css'

const HomePage = (acceptShare) => {
    const [checkEvents, setCheckEvents] = useState('')
    const { store } = useContext(Context)
    const [calendarsArray, setCalendarsArray] = useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('token'))
            navigate('/login');
        async function activeShare(){
            if(acceptShare){
                console.log(acceptShare.acceptShare)
                await store.acceptLinkCal(acceptShare.acceptShare)
            }
        }
        async function getCalendars() {
            const aboba = await store.getCalendars();
            setCalendarsArray(aboba);
        }
        activeShare()
        getCalendars()
    }, [navigate,acceptShare, store])
    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //       store.checkAuth()
    //     }
    //   }, [store])
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <div className='calendars_box_hp'>
                <CalendarsList setCheckEvents={setCheckEvents} calendarsArray={calendarsArray} />
                <Calendar checkEvents={checkEvents} />
            </div>
            <SettingsButton />
            <EventButton />
        </div>
    )
}
export default HomePage