import React from 'react';
import avatar from "../../../assets/avatar/yato.png"
import { useNavigate } from 'react-router-dom';

import './UserCircleStyle.css'

const UserCircle = () => {
    let navigate = useNavigate();

    return (
        <div>
            <div className='circle_user_box' onClick={() => { navigate('/editprofile') }}>
                <img src={avatar} alt="avatar" className='avatar' />
            </div>
        </div>
    )
}
export default UserCircle