import { useState } from "react";
import Calendar from 'react-calendar'
export const FirstCalendar = ({ fisrtCalendarState, Calendar1Show, showCalendar1, SetFirstCalendarState }) => {
    return (
        <div className='first_calendar'>
            <div>От: {fisrtCalendarState} </div>
            <div onClick={() => Calendar1Show()} className="show_button">Показать календарь</div>
            {showCalendar1 ? null :
                <Calendar className="calendar" onChange={SetFirstCalendarState} />
            }
        </div>
    )
}