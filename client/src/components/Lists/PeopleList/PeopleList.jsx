import React from 'react';
import UserCircle from '../../Button/UserButton/UserCircle'
// import PeopleBox from '../../Box/PeopleBox/PeopleBox'
import './PeopleListStyle.css'

const PeopleList = ({ idUs, isAutor, /*dellPeople,*/ peopleCal }) => {


    return (
        <div className='owerflow_box_pl'>
            <div className={idUs === isAutor ? 'box_people_pl activ_autor_pl' : 'box_people_pl'}>
                <UserCircle />
                <div className='name_people_pl'>Me</div>
            </div>
            {peopleCal.map((dayItem) => (
               dayItem._id !==idUs?
                    <div className={dayItem._id  === isAutor ? 'box_people_pl activ_autor_pl' : 'box_people_pl'}>
                        <UserCircle />
                         <div className='name_people_pl'>{dayItem.email}</div>
                    </div>
                    : ''
            //      
        //        <div className={idUs === isAutor ? 'box_people_pl activ_autor_pl' : 'box_people_pl'}>
        //        {console.log(dayItem.email)}
        //    </div>
            ))
            }
        </div>
    )
}
export default PeopleList