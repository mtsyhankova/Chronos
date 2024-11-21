import React, { /*useState,*/ useEffect } from 'react';
import ArrowLeft from '../Button/Arrows/ArrowLeft';
import ArrowRight from '../Button/Arrows/ArrowRight';
import './MonthSliderStyle.css'

const MonthSlider = ({ setClassSeason, setClassBoxDay, setClassBoxNameDay, month, lastMonth, nextMont, setHoverDay }) => {
    // let date = new Date();
    // let result = date.getMonth();
    // const [index, setIndex] = useState(result);
    // const monthsArray = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

    useEffect(() => {
        switch (month) {
            case 'December': case 'January': case 'February':
                setClassSeason('header_calendar_c winter');
                setClassBoxDay('days_list_dl blue_dl')
                setClassBoxNameDay('name_day_b blue_b')
                setHoverDay('day_box_db blue_db')
                break;

            case 'March': case 'April': case 'May':
                setClassSeason('header_calendar_c spring');
                setClassBoxDay('days_list_dl pink_dl')
                setClassBoxNameDay('name_day_b pink_b')
                setHoverDay('day_box_db pink_db')
                break;

            case 'August': case 'July': case 'June':
                setClassSeason('header_calendar_c summer');
                setClassBoxDay('days_list_dl green_dl')
                setClassBoxNameDay('name_day_b green_b')
                setHoverDay('day_box_db green_db')
                break;

            case 'November': case 'October': case 'September':
                setClassSeason('header_calendar_c fall');
                setClassBoxDay('days_list_dl orange_dl')
                setClassBoxNameDay('name_day_b orange_b')
                setHoverDay('day_box_db orange_db')
                break;

            default: break;
        }
    }, [setClassSeason, setClassBoxDay, setClassBoxNameDay, setHoverDay, month])

    return (
        <div className='slider_month'>
            <ArrowLeft lastMonth={lastMonth} />
            <p className='month_name'>{month}</p>
            <ArrowRight nextMont={nextMont} />
        </div>
    )
}
export default MonthSlider