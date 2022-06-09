import styles from "@styles/pages/Signup.module.css";

import MainContainer from "@components/UI/MainContainer";
import CenterContainer from "@components/UI/CenterContainer";

import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <MainContainer>
      <CenterContainer>
        <div className={styles.signupContainer}>
          <h1 className={styles.title}>Sign Up For An Account</h1>
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

            <button type="submit">Signup</button>
          </form>
        </div>
      </CenterContainer>
    </MainContainer>
  );
}
