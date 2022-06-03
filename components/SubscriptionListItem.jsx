import styles from "@styles/components/SubscriptionListItem.module.css";

import CancelButton from "@components/UI/CancelButton";
import EditButton from "@components/UI/EditButton";

export default function SubscriptionListItem({ subscriptionItem }) {
  const { name, billingPeriod, price, startDate, isActive, logo } =
    subscriptionItem;
  const { daysLeftString, expirationDate } = numberDaysTillExpire(startDate);

  return (
    <li className={styles.subscriptionListItem}>
      <EditButton />
      <img
        className={styles.subscriptionLogo}
        width="75"
        height="60"
        src={`/logos/${logo}`}
      />
      <span className={styles.subscriptionName}>{name}</span>
      <span className={styles.numberDaysLeft}>{daysLeftString}</span>
      <span className={styles.expirationDate}>{expirationDate}</span>
      <CancelButton />
    </li>
  );
}

function numberDaysTillExpire(date) {
  // TODO: calculate the actual number of days till renewal.
  return { daysLeftString: "10 Days", expirationDate: "7/21/22" };
}
