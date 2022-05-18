import Subscription from "../types/Subscription";
import BillingPeriod from "../types/BillingPeriod";

describe("Subscription Class Test", () => {

  it("Using an invalid billing period should throw an error", () => {
    expect(() => { new Subscription("testname", "BIWEEKLY"); }).toThrowError();
  });

  it("Subscription() should throw error if non Date object is used", () => {
    expect(() => {
      new Subscription("testname", BillingPeriod.MONTHLY, 9.99, "1/2/3", true);
    }).toThrowError();
  });

  it("A valid Subscription object should be created without throwing an error", () => {
    expect(() => {
      const today = new Date();
      const sub = new Subscription("testname", BillingPeriod.MONTHLY, 9.99, today, true, "logo.jpg");
    }).not.toThrowError();
  });
});