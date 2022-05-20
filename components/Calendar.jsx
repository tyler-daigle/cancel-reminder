import styles from "@styles/components/Calendar.module.css";

import { useState, useEffect } from "react";

import { CalendarCreator, MonthStrings } from "utils/calendar";

export default function Calendar({ month, year, monthDec, monthInc }) {
  const [monthlyCalendar, setMonthlyCalendar] = useState([]);

  useEffect(() => {
    const cal = new CalendarCreator(year);
    const monthCal = cal.createMonthlyCalendar(month);
    setMonthlyCalendar(monthCal);
  }, [month]);

  return (
    <div className={styles.calendarContainer}>
      {monthlyCalendar ?
        <MonthlyCalendar month={month} year={year} calendarData={monthlyCalendar} monthDec={monthDec} monthInc={monthInc} /> : <h3>Loading...</h3>}
    </div>
  );
}

function MonthlyCalendar({ month, year, calendarData, monthInc, monthDec }) {
  return (
    <CalendarContainer>
      <CalendarHeader month={month} year={year} monthInc={monthInc} monthDec={monthDec} />
      <CalendarBody>
        {calendarData.map(d => <Week weekData={d} />)}
      </CalendarBody>
    </CalendarContainer>
  );
}

function Week({ weekData }) {
  // weekData is a 7 element array, each element is the date
  // for that day of the week - starting from Sunday - 0s are 
  // blank spaces on the calendar.

  return (
    <tr>
      {weekData.map(day => day !== 0 ? <td>{day}</td> : <td></td>)}
    </tr>
  );
}

function CalendarContainer({ children }) {
  return (
    <table className={styles.calendarTable}>
      {children}
    </table>
  );
}

function CalendarBody({ children }) {
  return <tbody>{children}</tbody>;
}

function CalendarHeader({ month, year, monthDec, monthInc }) {

  if (month < 0 || month > 11) {
    month = 0;
  }

  return (
    <>
      <caption>
        <button className={styles.changeMonthButton} onClick={monthDec}>&lt;</button>
        {MonthStrings[month]} {year}
        <button className={styles.changeMonthButton} onClick={monthInc}>&gt;</button>

      </caption>
      <thead>
        <tr className={styles.weekNames}>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thr</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
    </>
  );
}