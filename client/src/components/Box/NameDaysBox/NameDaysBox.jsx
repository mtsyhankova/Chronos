import React, { useEffect } from 'react';
import ArrowLeft from '../../Button/Arrows/ArrowLeft';
import ArrowRight from '../../Button/Arrows/ArrowRight';
import './NameDaysBoxStyle.css'

const NameDaysBox = ({ classBoxNameDay, nextDay, lastDay, nameDayType, nowType, lastWeek, nextWeek }) => {


    return (
        <div >
            {nowType === 'month' ?
                <div className={classBoxNameDay}>
                    {nameDayType.map((index) => (
                        <div className='days_ndb' key={index}>{index}</div>
                    ))}
                </div>

                : nowType === 'day' ?
                    <div className={classBoxNameDay + ' day_box_ndb'}>
                        <div className='left_arr_ndb'> <ArrowLeft lastMonth={lastDay} /></div>
                        {nameDayType.map((index) => (
                            <div className='days_ndb' key={index}>{index}</div>
                        ))}
                        <div className='right_arr_ndb'><ArrowRight nextMont={nextDay} /></div>
                    </div>
                    : <div className={classBoxNameDay + ' day_box_ndb'}>
                        <div className='left_arr_ndb'> <ArrowLeft lastMonth={lastWeek} /></div>
                        {nameDayType.map((index) => (
                            <div className='days_ndb' key={index}>{index}</div>
                        ))}
                        <div className='right_arr_ndb'><ArrowRight nextMont={nextWeek} /></div>
                    </div>
            }

        </div>



    )
}
export default NameDaysBox