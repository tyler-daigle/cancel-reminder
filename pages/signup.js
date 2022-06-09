import styles from "@styles/pages/Signup.module.css";
import CenterContainer from "@components/UI/CenterContainer";

import { useState, useContext, useEffect } from "react";
import { AppContext } from "store/AppContext";

import useSignup from "../hooks/useSignup";
import { useRouter } from "next/router";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState("");
  const { signupUser, error, isPending } = useSignup();
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
    // bring in useSignup hook
    // redirect to the main page after logging in

    if (
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setSignupError("All fields must be filled in");
      return;
    }

    // make sure passwords match
    if (password !== confirmPassword) {
      setSignupError("Passwords must match.");
      return;
    }

    setSignupError(null);
    signupUser(email, password);

    console.log(email, password);
  };

  return (
    <CenterContainer>
      <div className={styles.signupContainer}>
        <h1 className={styles.crLogo}>Cancel Reminder</h1>
        <h2 className={styles.title}>Sign Up For An Account</h2>
        <form onSubmit={submitForm}>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Create a password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {isPending ? (
            <button type="submit" disabled>
              Signing You Up..
            </button>
          ) : (
            <button type="submit">Signup</button>
          )}

          {signupError && <p className={styles.error}>{signupError}</p>}
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </CenterContainer>
  );
}
