import styles from "@styles/pages/Welcome.module.css";
import Link from "next/link";

export default function Welcome() {
  return (
    <main>
      <div className={styles.welcomeContainer}>
        <div className={styles.overlay}>
          <h1 className={styles.welcomeTitle}>Cancel Reminder</h1>

          <p className={styles.welcomeQuestion}>
            Have you ever signed up for a trial and then forgot to cancel? Did
            you end up paying for a full month because you cancelled your
            subscription one day too late? Did you completely forget that you
            were even subscribed to some service until you were charged?
          </p>

          <p className={styles.welcomeText}>
            If you answered yes to any of the questions above then you need
            <strong> Cancel Reminder</strong>! Easily keep track of your
            subscription to services such as Neflix, Hulu, Amazon Prime and many
            other services. See exactly when you will be charged again and never
            waste your money again!
          </p>

          <Link href="/signup">
            <a className={styles.signupLink}>Sign Up For A Free Account</a>
          </Link>
        </div>
        {/* end of overlay */}
        {/* end of welcomeContainer */}
      </div>
    </main>
  );
}
