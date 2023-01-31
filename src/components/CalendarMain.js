import { useState } from 'react'
import { CalendarTitle } from './CalendarTitle'
import { Calendars } from './Calendars'
import { ButtonSection } from './ButtonSection'
export const CalendarMain = ({
    fisrtCalendarState,
    SetFirstCalendarState,
    secondCalendarState,
    SetSecondCalendarState,
    FilterToDo }) => {

    const [showCalendar1, setShowCalendar1] = useState(true)
    const [showCalendar2, setShowCalendar2] = useState(true)

    const Calendar1Show = () => {
        if (showCalendar1 === false) {
            setShowCalendar1(true)
        }
        else {
            setShowCalendar1(false)
        }
    }
    const Calendar2Show = () => {
        if (showCalendar2 === false) {
            setShowCalendar2(true)
        }
        else {
            setShowCalendar2(false)
        }
    }
    return (
        <div>
            <CalendarTitle />
            <Calendars
                fisrtCalendarState={fisrtCalendarState}
                Calendar1Show={() => Calendar1Show()}
                showCalendar1={showCalendar1}
                SetFirstCalendarState={SetFirstCalendarState}
                secondCalendarState={secondCalendarState}
                Calendar2Show={() => Calendar2Show()}
                showCalendar2={showCalendar2}
                SetSecondCalendarState={SetSecondCalendarState}
            />
            <ButtonSection FilterToDo={FilterToDo} />
        </div>
    )
}