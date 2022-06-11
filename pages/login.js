import styles from "@styles/pages/Signup.module.css";
import CenterContainer from "@components/UI/CenterContainer";

import { useState, useContext, useEffect } from "react";
import { AppContext } from "store/AppContext";

import useLogin from "../hooks/useLogin";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { loginUser, error, isPending } = useLogin();
  const { user } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    if (user !== null) {
      console.log(`User updated: ${user.email}`);
      router.push("/");
    }
  }, [user, router]);

  const submitForm = (e) => {
    e.preventDefault();

    if (email.length === 0 || password.length === 0) {
      setLoginError("All fields must be filled in");
      return;
    }

    setLoginError(null);
    loginUser(email, password);
  };

  return (
    <CenterContainer>
      <div className={styles.signupContainer}>
        <h1 className={styles.crLogo}>Cancel Reminder</h1>
        <h2 className={styles.title}>Login To Your Account</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {isPending ? (
            <button type="submit" disabled>
              Logging You In...
            </button>
          ) : (
            <button type="submit">Login</button>
          )}

          {loginError && <p className={styles.error}>{loginError}</p>}
          {error && <p className={styles.error}>{error}</p>}
        </form>
        <p className={styles.signupText}>
          Don&apos;t have an account?{" "}
          <Link href="/signup">
            <a className={styles.signupLink}>Sign up here.</a>
          </Link>
        </p>
      </div>
    </CenterContainer>
  );
}
