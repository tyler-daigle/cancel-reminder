import styles from "../styles/SubscriptionList.module.css";

import SubscriptionListItem from "./SubscriptionListItem";

export default function SubscriptionList({ subscriptions }) {

  return (
    <ul className={styles.subscriptionList}>
      {subscriptions.map(sub => <SubscriptionListItem key={sub.id} subscriptionItem={sub} />)}
    </ul>
  );
}