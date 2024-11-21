import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Context } from "../../";
import NewEventsForm from '../../components/Forms/Event/NewEventsForm';
import NavigationBar from '../../components/Navigation/NavigationBar';


const NewEventPage = () => {
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <NewEventsForm />
        </div>
    )
}
export default NewEventPage