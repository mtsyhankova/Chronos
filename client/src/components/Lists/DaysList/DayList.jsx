import React, { useState, useEffect, useContext } from 'react';
import DayBox from '../../Box/DayBox/DayBox';

import './DaysListStyle.css'

const DayList = ({ classBoxDay, daysArray, classHoverDay, month }) => {
    const [timeArray, setTimeArray] = useState([]);
    useEffect(() => {
        let array = ['00:00'],
            h1 = 0,
            h2 = 0,
            mm = '00';

        while (h1 !== 2 || h2 !== 4) {
            if (mm === '30') {
                mm = '00';
                if (h2 === 9) {
                    h2 = 0;
                    h1 += 1;
                }
                else {
                    h2 += 1;
                }
            }
            else {
                mm = '30';
            }

            array.push(`${h1}${h2}:${mm}`);
        }

        setTimeArray(array);
    }, [])
    return (
        <div className={`${classBoxDay} list_day_box_dl`}>

            {timeArray.map((index) => (<div key={index} className='day_box_dl'>{index}
            </div>
            ))
            }


            {/* {daysArray.map((dayItem) => (
                <div className='day_wt' className='day_box_dl' >dwdw</div>
            ))
            } */}
        </div>
    )
}
export default DayList