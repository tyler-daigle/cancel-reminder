import styles from "@styles/components/SubscriptionList.module.css";

import SubscriptionListItem from "@components/SubscriptionListItem";

export default function SubscriptionList({ subscriptions }) {

  return (
    <ul className={styles.subscriptionList}>
      {subscriptions.map(sub => <SubscriptionListItem key={sub.id} subscriptionItem={sub} />)}
    </ul>
  );
}