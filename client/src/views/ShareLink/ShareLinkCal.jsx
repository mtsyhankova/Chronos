import React, { useEffect, useContext, useCallback } from 'react';
import { Context } from "../..";
import { useNavigate } from 'react-router-dom';

import NavigationBar from '../../components/Navigation/NavigationBar';

import './ShareLinks.css'
import { useState } from 'react';
const ShareLinkCal = ({setAcceptShare}) => {
    const { store } = useContext(Context)
    const navigate = useNavigate();
    const [user,setUser] = useState('')
    const [titleCAl,setTitleCal] =useState('')
    const link = window.location.href.split('/')[4]
    const accept = () => {
        if (store.isAuth === false){
            
            navigate('/login');
        }
        setAcceptShare(link)
        // await store.dataAutorShare(link)
        navigate('/home');
    }

    const getAuthorData = useCallback(async() => {
    
        const dataAutor = await store.dataAutorShare(link)
        setUser(dataAutor.data.split('/')[0])
        setTitleCal(dataAutor.data.split('/')[1])
    }, [store,link])

    useEffect(() => {
        getAuthorData()
    }, [getAuthorData])

    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={false} />
            <div className='box_accept'>
                <div className='text_box_accept'>
                    User {user} <br></br>gave you access to the calendar {titleCAl}
                </div>

                <button className='button_accept_box' onClick={accept}>Accept</button>


            </div>

        </div>
    )
}
export default ShareLinkCal