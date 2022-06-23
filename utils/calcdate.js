import { differenceInDays, add } from "date-fns";
import BillingPeriod from "types/BillingPeriod";

export function calcDaysTillRenew(
  subDate,
  todaysDate,
  billingPeriod = BillingPeriod.MONTHLY
) {
  // monthly subscription where the current date is earlier than the sub date, meaning the renewal will
  // happen in a number of days: subDate.getDate() - todaysDate.getDate()
  if (
    todaysDate.getDate() < subDate.getDate() &&
    billingPeriod === BillingPeriod.MONTHLY
  ) {
    return differenceInDays(
      add(todaysDate, { days: subDate.getDate() - todaysDate.getDate() }),
      todaysDate
    );
  }

  // if the date has already passed and it is a monthly subscription, switch to the next month and find the difference between the dates
  if (
    todaysDate.getDate() > subDate.getDate() &&
    billingPeriod === BillingPeriod.MONTHLY
  ) {
    const nextDate = add(todaysDate, { months: 1 });
    const renewDate = new Date(
      nextDate.getFullYear(),
      nextDate.getMonth(),
      subDate.getDate()
    );
    return differenceInDays(renewDate, todaysDate);
  }

  const nextRenewal = new Date(
    todaysDate.getFullYear(),
    todaysDate.getMonth(),
    subDate.getDate()
  );

  return differenceInDays(nextRenewal, todaysDate);
}
