import React, { useState } from 'react';
import NavigationBar from '../../components/Navigation/NavigationBar';

import '../LoginPage/LoginPageStyle.css'

const ResetPasswordPage = () => {
    const [/*email, */setEmail] = useState([]);
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

                <div className='auth_login'>
                    <span className='auth_span'>Recovery email</span>
                    <input className='auth_input' required type="text" placeholder='enter email...' onChange={e => setEmail(e.target.value)} />
                </div>

                <div className='auth_error'>{error}</div>

                <div className='aboba'><button className='auth_button'>Reset</button></div>
            </form>
        </div>
    )
}
export default ResetPasswordPage