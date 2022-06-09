import styles from "@styles/components/SubscriptionListItem.module.css";
import { calcDaysTillRenew } from "../utils/calcdate";

import CancelButton from "@components/UI/CancelButton";
import EditButton from "@components/UI/EditButton";

export default function SubscriptionListItem({ subscriptionItem }) {
  const { name, billingPeriod, price, startDate, isActive, logo } =
    subscriptionItem;

  // TODO: have to make sure startDate is actually a Date Object - when
  // it comes out of firestore it is just a string.
  const { daysLeftString, expirationDate } = numberDaysTillExpire(
    new Date(startDate.toDate())
  );

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

function numberDaysTillExpire(startDate) {
  const ending = (num) => (num === 1 ? "" : "s");
  const todaysDate = new Date();
  const daysLeft = calcDaysTillRenew(startDate, todaysDate);

  return {
    daysLeftString: `${daysLeft} Day${ending(daysLeft)}`,
    expirationDate: "7/21/22",
  };
}
