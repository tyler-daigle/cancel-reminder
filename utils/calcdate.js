import { differenceInDays } from "date-fns";

export function calcDaysTillRenew(subDate, todaysDate) {
  if (todaysDate.getDate() >= subDate.getDate()) {
    // we passed the date already, go to next month
    // check for equal also, since that means we were already renewed
    const nextRenewal = new Date(
      todaysDate.getFullYear(),
      todaysDate.getMonth() + 1,
      subDate.getDate()
    );
    return differenceInDays(nextRenewal, todaysDate);
  } else {
    // we haven't reached the date yet
    const nextRenewal = new Date(
      todaysDate.getFullYear(),
      todaysDate.getMonth(),
      subDate.getDate()
    );
    return differenceInDays(nextRenewal, todaysDate);
  }
}
