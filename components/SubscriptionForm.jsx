import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "store/AppContext";

import styles from "@styles/components/SubscriptionForm.module.css";
import BillingPeriod from "types/BillingPeriod";
import Subscription from "../types/Subscription";

export default function SubscriptionForm() {
  const router = useRouter();
  const { addSubscription, user } = useContext(AppContext);

  const [itemName, setItemName] = useState("");
  const [itemCost, setItemCost] = useState("");
  const [itemStartDate, setItemStartDate] = useState(new Date());
  // const [selectedBillingPeriod, setSelectedBillingPeriod] = useState(
  //   BillingPeriod.MONTHLY
  // );
  const selectedBillingPeriod = BillingPeriod.MONTHLY; // only monthly billing currently
  const [cancelUrl, setCancelUrl] = useState("");
  const [error, setError] = useState(null);

  const checkAllFields = () => {
    if (
      itemName === "" ||
      itemCost === "" ||
      itemStartDate === "" ||
      cancelUrl === ""
    ) {
      setError("All fields must be filled in.");
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const submitForm = (e) => {
    // const testSub = new Subscription(
    //   "XBox Live",
    //   BillingPeriod.MONTHLY,
    //   1499,
    //   new Date(),
    //   true,
    //   "default.png"
    // );

    e.preventDefault();
    if (checkAllFields()) {
      const sub = new Subscription(
        itemName,
        selectedBillingPeriod,
        Math.ceil(itemCost * 100),
        itemStartDate,
        true,
        "default.png",
        cancelUrl
      );
      sub.uid = user.uid;

      try {
        addSubscription(sub);
        router.push("/");
      } catch (err) {
        setError(err);
      }
      setError("Not yet working...");
    }
    return;

    // on submit the price has to be converted to cents
    // addSubscription(testSub);
    // console.log("Form submitted");
  };

  const cancelForm = () => {
    router.push("/");
  };

  const convertDate = (time) => {
    // the date from the datepicker element is set to UTC and adjusting for user's timezone
    // can cause it to display the wrong date.
    if (time === null) {
      return new Date();
    }
    const t = new Date(
      time.getUTCFullYear(),
      time.getUTCMonth(),
      time.getUTCDate()
    );

    return t;
  };

  const createDateString = (date) => {
    if (date === null) {
      return new Date();
    }
    // itemStartDate is a Date object but the date picker needs a string in the YYYY-MM-DD format

    // create the string that the date picker needs to display the proper date
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    return `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    }`;
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.title}>Add A New Subscription</h3>

      <form onSubmit={submitForm}>
        <label className={styles.inputLabel} htmlFor="itemName">
          Item Name:
        </label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />

        <label className={styles.inputLabel} htmlFor="itemCost">
          Item Cost:
        </label>
        <input
          type="number"
          id="itemCost"
          value={itemCost}
          step="any"
          onChange={(e) => setItemCost(e.target.value)}
        />

        <label className={styles.inputLabel} htmlFor="itemStartDate">
          Subscription Start Date:
        </label>
        <input
          type="date"
          value={createDateString(convertDate(itemStartDate))}
          id="itemStartDate"
          onChange={(e) => setItemStartDate(convertDate(e.target.valueAsDate))}
        />

        {/* TODO: Extract the billing radio buttons as a seperate component
        <fieldset className={styles.billingPeriodFieldSet}>
          <legend className={styles.billingPeriodLegend}>Billing Period</legend>
          <div className={styles.billingPeriodRadioContainer}>
            <div className={styles.billingPeriodItem}>
              <input
                type="radio"
                id="billingPeriodWeekly"
                name="billingPeriod"
                value={BillingPeriod.WEEKLY}
                checked={selectedBillingPeriod === BillingPeriod.WEEKLY}
                onChange={(e) => setSelectedBillingPeriod(e.target.value)}
              />
              <label htmlFor="billingPeriodWeekly">Weekly</label>
            </div>

            <div className={styles.billingPeriodItem}>
              <input
                type="radio"
                id="billingPeriodYearly"
                name="billingPeriod"
                value={BillingPeriod.YEARLY}
                checked={selectedBillingPeriod === BillingPeriod.YEARLY}
                onChange={(e) => setSelectedBillingPeriod(e.target.value)}
              />
              <label htmlFor="billingPeriodYearly">Yearly</label>
            </div>

            <div className={styles.billingPeriodItem}>
              <input
                type="radio"
                id="billingPeriodMonthly"
                name="billingPeriod"
                value={BillingPeriod.MONTHLY}
                checked={selectedBillingPeriod === BillingPeriod.MONTHLY}
                onChange={(e) => setSelectedBillingPeriod(e.target.value)}
              />
              <label htmlFor="billingPeriodMonthly">Monthly</label>
            </div>

            <div className={styles.billingPeriodItem}>
              <input
                type="radio"
                id="billingPeriodSixMonths"
                name="billingPeriod"
                value={BillingPeriod.SIXMONTHS}
                checked={selectedBillingPeriod === BillingPeriod.SIXMONTHS}
                onChange={(e) => setSelectedBillingPeriod(e.target.value)}
              />
              <label htmlFor="billingPeriodSixMonths">Every 6 Months</label>
            </div>
          </div>
        </fieldset> */}

        <label className={styles.inputLabel} htmlFor="cancelUrl">
          Cancellation URL or site&apos;s main URL:
        </label>
        <input
          type="url"
          id="cancelUrl"
          value={cancelUrl}
          onChange={(e) => setCancelUrl(e.target.value)}
        />

        <IconSelector />

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Add Item
          </button>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={cancelForm}
          >
            Cancel
          </button>
        </div>
      </form>
      {error && <p className={styles.addSubError}>{error}</p>}
    </div>
  );
}

function IconSelector() {
  return <div className={styles.iconSelectorPlaceHolder}></div>;
}
