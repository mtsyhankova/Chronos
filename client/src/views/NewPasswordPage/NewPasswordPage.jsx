import React, { useState } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';

import '../LoginPage/LoginPageStyle.css'
import './NewPasswordPageStyle.css'

const NewPasswordPage = () => {
    const [/*password, */setPassword] = useState([]);
    const [error, setError] = useState('');

    const signupFunc = async event => {
        event.preventDefault();
        try {

        }
        catch (e) {
            setError(e.response.data)
        }
    }

    return (
        <div>
            <NavigationBar isUserLogged={false} />
            <form onSubmit={signupFunc} className='auth_page'>
                <span className='auth_pagetitle'>Reset password</span>

                <div className='auth_pass'>
                    <span className='auth_span'>Password</span>
                    <input className='auth_input' required type="text" placeholder='enter password...' onChange={e => setPassword(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='aboba'><button className='auth_button'>Reset</button></div>
            </form>
        </div>
    )
}
export default NewPasswordPage