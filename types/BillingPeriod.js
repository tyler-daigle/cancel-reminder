const BillingPeriod = {
  MONTHLY: "MONTHLY",
  YEARLY: "YEARLY",
  WEEKLY: "WEEKLY",
  SIXMONTHS: "SIXMONTHS"
};

export function checkForValidBillingPeriod(period) {
  if (!Object.keys(BillingPeriod).includes(period)) {
    throw new Error(`Invalid BillingPeriod: ${period}`);
  }
}

export default BillingPeriod;