import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../";
import NavigationBar from '../../components/Navigation/NavigationBar';

import '../LoginPage/LoginPageStyle.css'

const EditUserPage = () => {
    const { store } = useContext(Context)
    let navigate = useNavigate();
    useEffect(() => {
        if (store.isAuth === false)
            navigate('/');

    }, [store])
    const [/*login, */setLogin] = useState([]);
    const [/*email, */setEmail] = useState([]);
    const [error, setError] = useState('');

    const loginFunc = async event => {
        event.preventDefault();
        try {

        }
        catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <NavigationBar isUserLogged={true} />
            <form onSubmit={loginFunc} className='auth_page'>
                <span className='auth_pagetitle'>Edit profile</span>

                <div className='auth_login'>
                    <span className='auth_span'>Login</span>
                    <input className='auth_input' required type="text" placeholder='aboba' onChange={e => setLogin(e.target.value)} />
                </div>
                <div className='auth_login'>
                    <span className='auth_span'>email</span>
                    <input className='auth_input' required type="text" placeholder='aboba@gmail.com' onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='aboba'><button className='auth_button'>Confirm changes</button></div>
            </form>
        </div>
    )
}
export default EditUserPage