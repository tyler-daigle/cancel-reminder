import styles from "../styles/SubscriptionListItem.module.css";

import CancelButton from "./CancelButton";
import EditButton from "./EditButton";

export default function SubscriptionListItem({ subscriptionItem }) {
  const { name, billingPeriod, price, startDate, isActive, logo } = subscriptionItem;
  const { daysLeftString, expirationDate } = numberDaysTillExpire(startDate);

  return (
    <li className={styles.subscriptionListItem}>
      <EditButton />
      <img className={styles.subscriptionLogo} width="75" height="60" src={`/logos/${logo}`} />
      <span className={styles.subscriptionName}>{name}</span>
      <span className={styles.numberDaysLeft}>{daysLeftString}</span>
      <span className={styles.expirationDate}>{expirationDate}</span>
      <CancelButton />
    </li>
  );
}

function numberDaysTillExpire(date) {
  return { daysLeftString: "10 Days", expirationDate: "7/21/22" };
}