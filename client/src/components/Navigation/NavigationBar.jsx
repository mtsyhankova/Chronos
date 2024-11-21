import React from 'react';
import caler from "../../assets/calendar/calendar.png"
import Burger from '../Button/Burger/Burger';
import UserCircle from '../Button/UserButton/UserCircle';
import { useNavigate } from 'react-router-dom';

import './NavigationBarStyle.css'

const NavigationBar = ({ isUserLogged }) => {
    let navigate = useNavigate();

    return (
        <div className='nav_bar_box'>
            <div className='logo' onClick={() => { navigate('/') }}>
                <img src={caler} alt="logo" className='logo' />
                <p>CHRONOS</p>
            </div>
            {isUserLogged === true
                ? <div className='user_box_nav'>
                    <UserCircle />
                    <p className='user_name'>Ffeffeffo</p>
                    <Burger />
                </div>
                : ''
            }
        </div>
    )
}
export default NavigationBar