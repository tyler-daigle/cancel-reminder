/*
  The subscription objects have a start date, the day the user started their subscription.
  The subscriptions also have a billing period - how often the subscription is billed.
  The purpose of calcdate is to calculate the date when the user will be charged again.

  If the user is charged monthly we will assume that they are charged on the same day
  every month.

    So get the day that the sub started, get todays date. If today's date is less than
    the starting date calculate how many days until the subscription renews.

    If the date has passed already, calculate how many days until the charge date the next
    month.

  Weekly just add 7 days.

  Annually we assume it is the same day each year.

*/

import { calcDaysTillRenew } from "utils/calcdate";

describe("Given a Date Object, add a number of days to it and calculate how many days until that date", () => {
  it("The subscription should be renewed in 1 day", () => {
    const startDate = new Date(2022, 3, 5);
    // today's date will be set to almost 1 month ahead
    const todaysDate = new Date(2022, 4, 4);
    expect(calcDaysTillRenew(startDate, todaysDate)).toEqual(1);
  });

  it("The subscription should be renewed in 31 days", () => {
    const startDate = new Date(2022, 5, 1); // June 1
    const todaysDate = new Date(2022, 6, 1); // July 1
    // next renewal date should be August 1, or 31 days from now
    expect(calcDaysTillRenew(startDate, todaysDate)).toEqual(31);
  });
});
