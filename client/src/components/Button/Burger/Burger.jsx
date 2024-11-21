import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../../";

import './BurgerStyle.css'

const Burger = () => {
    const [check, setCheck] = useState(true);
    const { store } = useContext(Context)
    let navigate = useNavigate();

    const click = event => {
        if (check === true)
            setCheck(false)
        else {
            setCheck(true)
        }
    }

    const logout = async event => {
        store.logout()
        navigate('/login')
    }

    return (
        <div className={check === true ? 'icon burger_icon' : 'open icon burger_icon '} onClick={click}>
            <div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={check === true ? 'hidden burger_dropdown' : 'shown burger_dropdown'}>
                <div className='burger_list_item' onClick={() => { navigate('/editprofile') }}><p>Edit profile</p></div>
                <div className='burger_list_item' onClick={logout}><p>Log out</p></div>
            </div>
        </div>
    )
}
export default Burger