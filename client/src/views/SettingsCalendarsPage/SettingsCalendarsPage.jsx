import React from 'react';
import SettingsCalendarForm from '../../components/Forms/Settings/SettingsCalendarForm'
import NavigationBar from '../../components/Navigation/NavigationBar';

const SettingsCalendarsPage = () => {
    return (
        <div className='home_page_hp'>
            <NavigationBar isUserLogged={true} />
            <SettingsCalendarForm />
        </div>
    )
}
export default SettingsCalendarsPage