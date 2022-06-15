import BillingPeriod, { checkForValidBillingPeriod } from "./BillingPeriod";

let nextId = 0;

export default class Subscription {
  name;
  billingPeriod;
  price;
  startDate; // Date() object
  isActive = true;
  logo = "default.png";
  url = "";

  constructor(
    name,
    billingPeriod,
    price,
    startDate,
    isActive,
    logo,
    url = "https://www.google.com"
  ) {
    checkForValidBillingPeriod(billingPeriod);

    // make sure a Date object was used
    if (
      typeof startDate !== "object" ||
      typeof startDate.getDay === "undefined"
    ) {
      throw new Error("startDate is not a Date Object.");
    }

    // check if the price is actually a number
    if (typeof price !== "number") {
      throw new Error("Price must be a number");
    }

    // make sure a name was entered
    if (this.name === "") {
      throw new Error("A name for the subscription must be provided");
    }

    this.name = name;
    this.billingPeriod = billingPeriod;
    this.price = price; // price should be stored as cents
    this.startDate = startDate;
    this.isActive = typeof isActive === "boolean" ? isActive : false;
    this.logo = logo;
    this.id = nextId++;
    this.url = url;
  }
}
