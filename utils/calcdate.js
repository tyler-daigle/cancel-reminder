import { differenceInDays } from "date-fns";
import BillingPeriod from "types/BillingPeriod";

export function calcDaysTillRenew(
  subDate,
  todaysDate,
  billingPeriod = BillingPeriod.MONTHLY
) {
  let numMonths = 0;
  let numDays = 0;
  let numYears = 0;

  switch (billingPeriod) {
    case BillingPeriod.SIXMONTHS:
      numMonths = 6;
      break;

    case BillingPeriod.WEEKLY:
      numDays = 7;
      break;

    case BillingPeriod.YEARLY:
      numYears = 1;
      break;

    default:
      numMonths = 1;
  }

  if (todaysDate.getDate() >= subDate.getDate()) {
    // we passed the date already, go to next month
    // check for equal also, since that means we were already renewed

    const nextRenewal = new Date(
      todaysDate.getFullYear() + numYears,
      todaysDate.getMonth() + numMonths,
      subDate.getDate() + numDays
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
