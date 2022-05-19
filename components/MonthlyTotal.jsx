import styles from "@styles/components/MonthlyTotal.module.css";

export default function MonthlyTotal({ items }) {
  const total = totalItems(items);
  const currencySymbol = "$";

  return (
    <div className={styles.monthlyTotalContainer}>
      <span className={styles.numberItems}>{items.length} items</span>
      <h3>Total Monthly Cost:</h3>
      <span className={styles.totalMonthlyCost}>{currencySymbol}{total}</span>
    </div>
  );
}

function totalItems(items) {
  const total = items.reduce((total, item) => total + item.price, 0);
  return total.toFixed(2);
}