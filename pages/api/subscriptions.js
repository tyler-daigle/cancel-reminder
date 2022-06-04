import Subscription from "../../types/Subscription";
import BillingPeriod from "../../types/BillingPeriod";

export default function subscriptions(req, res) {
  // check user id and return the subscriptions for that user
  const subs = [];
  const today = new Date();

  subs.push(
    new Subscription(
      "Netflix",
      BillingPeriod.MONTHLY,
      14.99,
      today,
      true,
      "default.png"
    )
  );
  subs.push(
    new Subscription(
      "HBO Max",
      BillingPeriod.MONTHLY,
      9.99,
      new Date(2022, 2, 1),
      true,
      "default.png"
    )
  );
  subs.push(
    new Subscription(
      "Shudder",
      BillingPeriod.MONTHLY,
      6.99,
      new Date(2022, 3, 6),
      true,
      "default.png"
    )
  );
  subs.push(
    new Subscription(
      "Amazon Prime",
      BillingPeriod.MONTHLY,
      14.99,
      new Date(2021, 12, 24),
      true,
      "default.png"
    )
  );
  subs.push(
    new Subscription(
      "Codepen.io",
      BillingPeriod.YEARLY,
      96.59,
      new Date(2021, 6, 14),
      true,
      "default.png"
    )
  );

  res.status(200).json(subs);
}
