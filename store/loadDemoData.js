import BillingPeriod from "types/BillingPeriod";
import Subscription from "../types/Subscription";
export function loadDemoData() {
  const subs = [];
  const demoSubs = [
    {
      name: "Netflix",
      period: BillingPeriod.MONTHLY,
      price: 1499,
      date: new Date(2022, 5, 23),
      active: true,
      logo: "logos/netflix-logo.png",
    },
    {
      name: "Hulu",
      period: BillingPeriod.MONTHLY,
      price: 999,
      date: new Date(2022, 4, 2),
      active: true,
      logo: "logos/Hulu-Logo-2017-2018.png",
    },
    {
      name: "Amazon Prime",
      period: BillingPeriod.MONTHLY,
      price: 1499,
      date: new Date(2022, 3, 13),
      active: true,
      logo: "logos/Amazon-Prime-Video-Logo.png",
    },
    {
      name: "Patreon",
      period: BillingPeriod.MONTHLY,
      price: 699,
      date: new Date(2022, 5, 4),
      active: true,
      logo: "logos/patreon.png",
    },
    {
      name: "Shudder",
      period: BillingPeriod.MONTHLY,
      price: 799,
      date: new Date(2022, 2, 2),
      active: true,
      logo: "logos/shudder.png",
    },
    {
      name: "Xbox Live",
      period: BillingPeriod.MONTHLY,
      price: 1499,
      date: new Date(2022, 1, 15),
      active: true,
      logo: "logos/Xbox-Live-Logo-1536x960.png",
    },
  ];

  demoSubs.forEach((sub) => {
    subs.push(
      new Subscription(
        sub.name,
        sub.period,
        sub.price,
        sub.date,
        sub.active,
        sub.logo
      )
    );
  });
  return subs;
}
