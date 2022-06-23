import { differenceInDays, add } from "date-fns";
import BillingPeriod from "types/BillingPeriod";

export function calcDaysTillRenew(
  subDate,
  todaysDate,
  billingPeriod = BillingPeriod.MONTHLY
) {
  switch (billingPeriod) {
    case BillingPeriod.MONTHLY:
      // monthly subscription where the current date is earlier than the sub date, meaning the renewal will
      // happen in a number of days: subDate.getDate() - todaysDate.getDate()
      if (todaysDate.getDate() < subDate.getDate()) {
        return differenceInDays(
          add(todaysDate, { days: subDate.getDate() - todaysDate.getDate() }),
          todaysDate
        );
      }

      // if the date has already passed and it is a monthly subscription, switch to the next month and find the difference between the dates
      if (todaysDate.getDate() > subDate.getDate()) {
        const nextDate = add(todaysDate, { months: 1 });
        const renewDate = new Date(
          nextDate.getFullYear(),
          nextDate.getMonth(),
          subDate.getDate()
        );
        return differenceInDays(renewDate, todaysDate);
      }
      return "Today"; // if we get here the dates are equal

    default:
    case BillingPeriod.SIXMONTHS:
    // to calc every 6 months add 6 months to the subdate and check if it is greater than or less than the current month
    // if it is greater then just find out how much greater (the number of months left in the six month period) add that number of months
    // to todays month and then set the date - then calc the difference between today's date and the next renewal

    // dealing with dates is very confusing...

    case BillingPeriod.YEARLY:
    case BillingPeriod.WEEKLY:
      throw new Error("Only monthly billing is working right now.");
  }
}
