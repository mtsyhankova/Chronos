import React from 'react';
import './PeopleBoxStyle.css'
import UserCircle from '../../Button/UserButton/UserCircle'



const PeopleBox = ({ isAutor, dellPeople }) => {
    return (
        <div className='box_people_pl'>

            <UserCircle />
            <div className='name_people_pl'> ckckckkkmm</div>
            {isAutor === true ?
                <button className='dell_peopl_pl' onClick={dellPeople}>x</button>
                : ''
            }

        </div>

    )
}
export default PeopleBox