import { FirstCalendar } from "./FirstCalendar"
import { SecondCalendar } from "./SecondCalendar"
export const Calendars = ({
    fisrtCalendarState,
    Calendar1Show,
    showCalendar1,
    SetFirstCalendarState,
    secondCalendarState,
    Calendar2Show,
    showCalendar2,
    SetSecondCalendarState }) => {

    return (
        <div className='calendar_container'>
            <FirstCalendar
                fisrtCalendarState={fisrtCalendarState}
                Calendar1Show={Calendar1Show}
                showCalendar1={showCalendar1}
                SetFirstCalendarState={SetFirstCalendarState}
            />
            <SecondCalendar
                secondCalendarState={secondCalendarState}
                Calendar2Show={Calendar2Show}
                showCalendar2={showCalendar2}
                SetSecondCalendarState={SetSecondCalendarState}
            />
        </div>
    )
}