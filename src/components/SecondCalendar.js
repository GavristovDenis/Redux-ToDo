import Calendar from 'react-calendar'

export const SecondCalendar = ({ secondCalendarState, Calendar2Show, showCalendar2, SetSecondCalendarState }) => {
    return (
        <div className='first_calendar'>
            <div>До: {secondCalendarState}</div>
            <div onClick={() => Calendar2Show()} className="show_button">Показать календарь</div>
            {showCalendar2 ? null :
                <Calendar className="calendar" onChange={SetSecondCalendarState} />}
        </div>
    )
}