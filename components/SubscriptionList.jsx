import styles from "@styles/components/SubscriptionList.module.css";

import SubscriptionListItem from "@components/SubscriptionListItem";

export default function SubscriptionList({ subscriptions }) {
  // TODO: When a new item is added, flash or something to give some feedback
  // when a new item has been added.
  return (
    <ul className={styles.subscriptionList}>
      {subscriptions.map((sub) => (
        <SubscriptionListItem key={sub.id} subscriptionItem={sub} />
      ))}
    </ul>
  );
}
