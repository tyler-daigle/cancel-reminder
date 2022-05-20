// const week = [0,0,0,1,2,3,4]
export const Months = {
  JANUARY: 0,
  FEBRUARY: 1,
  MARCH: 2,
  APRIL: 3,
  MAY: 4,
  JUNE: 5,
  JULY: 6,
  AUGUST: 7,
  SEPTEMBER: 8,
  OCTOBER: 9,
  NOVEMBER: 10,
  DECEMBER: 11
};

export const Days = {
  SUNDAY: 0,
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6
};

export const MonthStrings = [
  "January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October",
  "November", "December"
];

export class CalendarCreator {

  constructor(year) {
    this.year = year;
  }

  getNumDaysInMonth(month) {
    // passing day 0 to Date() constructor sets it as the
    // previous month's last day
    if (month < Months.JANUARY || month > Months.DECEMBER) {
      throw new Error("Invalid month: " + month);
    }

    const d = new Date(this.year, month + 1, 0);
    return d.getDate();
  }

  getDayFromDate(month, day) {
    if (month < Months.JANUARY || month > Months.DECEMBER) {
      throw new Error("Invalid month: " + month);
    }
    // return which day the date falls on
    return new Date(this.year, month, day).getDay();
  }

  createMonthlyCalendar(month) {
    if (month < Months.JANUARY || month > Months.DECEMBER) {
      throw new Error("Invalid month: " + month);
    }
    // fill in the array starting with the date 1 in the correct day 
    // position. Then just fill in the array until the last day of the month.
    // starting a new week after every saturday.

    // to create the calendar we figure out which day the month starts on.
    // then we find out how many days are in the month.
    const startingDay = this.getDayFromDate(month, 1);
    const numDays = this.getNumDaysInMonth(month);

    const monthlyCalendar = [];
    let currDate = 1;
    let currDayOfWeek = startingDay; // used as index in the week arrays

    while (currDate <= numDays) {
      // we create an array filled with 7 zeroes to represent the week.
      // each index is a day from sunday to saturday and will hold the
      // actual date
      const week = [0, 0, 0, 0, 0, 0, 0];

      for (let i = currDayOfWeek; i <= Days.SATURDAY; i++) {
        if (currDate > numDays) {
          break; // make sure not to go passed the actual num days in the month
        }
        week[i] = currDate++;
      }
      monthlyCalendar.push(week);
      currDayOfWeek = Days.SUNDAY; //start the week over
    }

    return monthlyCalendar;
  }
}
