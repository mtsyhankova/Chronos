import React, { useState, useContext } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../";

import './LoginPageStyle.css'

const LoginPage = ({acceptShare}) => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [error, setError] = useState('');
    const { store } = useContext(Context)
    let navigate = useNavigate();

    const loginFunc = async event => {
        event.preventDefault();
        const aboba = await store.login(email, password);

        if (aboba !== undefined) {
            setError(aboba.response.data.message)
        }
        else {
            navigate('/home');
        }
    }

    return (
        <div>
            <NavigationBar isUserLogged={false} />
            <form className='auth_page'>
                <span className='auth_pagetitle'>Log In </span>

                <div className='auth_login'>
                    <span className='auth_span'>Email</span>
                    <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                </div>
                <div className='auth_pass'>
                    <span className='auth_span'>Password</span>
                    <input className='auth_input' required type="text" placeholder='enter password...' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='auth_link'><a href="/reset_password">Forget your password?</a></div>
                <div className='auth_link'><a href="/signup">Don't have an account?</a></div>
                <div className='aboba'><button className='auth_button' onClick={loginFunc}>Log In</button></div>
            </form>
        </div>
    )
}
export default LoginPage