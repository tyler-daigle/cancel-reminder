import { useState } from "react";

import styles from "@styles/components/SubscriptionForm.module.css";
import BillingPeriod from "types/BillingPeriod";

export default function SubscriptionForm() {
  const submitForm = () => console.log("Form submitted");
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState(
    BillingPeriod.MONTHLY
  );

  return (
    <div className={styles.addItemDialogContainer}>
      <h3 className={styles.dialogHeader}>Add A New Item</h3>

      <form onSubmit={submitForm}>
        <label className={styles.inputLabel} htmlFor="itemName">
          Item Name:
        </label>
        <input type="text" id="itemName" />

        <label className={styles.inputLabel} htmlFor="itemCost">
          Item Cost:
        </label>
        <input type="number" id="itemCost" />

        <label className={styles.inputLabel} htmlFor="itemStartDate">
          Subscription Start Date:
        </label>
        <input type="date" id="itemStartDate" />

        {/* TODO: Extract the billing radio buttons as a seperate component */}
        <fieldset className={styles.billingPeriodFieldSet}>
          <legend>Billing Period</legend>
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
        </fieldset>

        <label className={styles.inputLabel} htmlFor="cancelUrl">
          Cancellation URL or site's main URL:
        </label>
        <input type="url" id="cancelUrl" />

        <IconSelector />

        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.submitButton}>
            Add Item
          </button>
          <button type="button" className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

function IconSelector() {
  return <div className={styles.iconSelectorPlaceHolder}></div>;
}
