import React, { useState } from 'react'
import { useContext, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Context } from '.';
import HomePage from './views/HomePage/HomePage';
import LoginPage from './views/LoginPage/LoginPage';
import SignupPage from './views/SignupPage/SignupPage';
import ResetPasswordPage from './views/ResetPasswordPage/ResetPasswordPage';
import EditUserPage from './views/EditUserPage/EditUserPage';
import NewEventPage from './views/NewEventPage/NewEventPage';
import SettingsCalendarsPage from './views/SettingsCalendarsPage/SettingsCalendarsPage';
import ShareLinkCal from './views/ShareLink/ShareLinkCal';


import './style.css'

const { Routes, Route } = require('react-router-dom');


function App() {
  // let navigate = useNavigate();
  const { store } = useContext(Context)
  const [ acceptShare , setAcceptShare] =useState('')
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
    // if(store.isAuth ===false){
    //   navigate('/');
    // }
 
  }, [store])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={localStorage.getItem('token') == null ? <LoginPage /> : <HomePage acceptShare={acceptShare} />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/home' element={<HomePage acceptShare={acceptShare} />} />
        <Route path='/editprofile' element={<EditUserPage />} />
        <Route path='/newevent' element={<NewEventPage />} />
        <Route path='/settingscalendar' element={<SettingsCalendarsPage />} />
        <Route path='/reset_password' element={<ResetPasswordPage />} />
        <Route path='/activesharelink/:link' element={<ShareLinkCal setAcceptShare={setAcceptShare} />} />
      </Routes>
    </div>
  );
}

export default App;
