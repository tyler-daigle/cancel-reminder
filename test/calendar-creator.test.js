import { CalendarCreator, Months, Days } from "../utils/calendar";

// important to remember that Date() starts days and months at 0

describe("The Calendar class is used to create calendars", () => {
  it("The month of May should have 31 days", () => {
    const cal = new CalendarCreator(2022);
    expect(cal.getNumDaysInMonth(Months.MAY)).toEqual(31);
  });

  it("The 13th of May, 2022, should be a Friday.", () => {
    const cal = new CalendarCreator(2022);
    expect(cal.getDayFromDate(Months.MAY, 13)).toEqual(Days.FRIDAY);
  });

  it("The first day of May 2022 should be a Sunday (0)", () => {
    const cal = new CalendarCreator(2022);
    expect(cal.getDayFromDate(Months.MAY, 1)).toEqual(Days.SUNDAY);
  });

  it("Should be able to create the monthly calendar for May 2022", () => {
    const cal = new CalendarCreator(2022);
    const month = cal.createMonthlyCalendar(Months.MAY);

    // there should be 5 weeks created
    expect(month.length).toEqual(5);

    // in week 1, index 0 should contain the value 1
    expect(month[0][0]).toEqual(1);

    // in week 5, index 2 should contain the value 31
    expect(month[4][2]).toEqual(31);
  });

  it("Passing an invalid month should throw an error", () => {
    const cal = new CalendarCreator(2022);
    expect(() => {
      cal.getNumDaysInMonth(12);
    }).toThrowError();
  });
});