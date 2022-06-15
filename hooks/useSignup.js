import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { AppContext, ACTIONS } from "../store/AppContext";

export default function useSignup() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AppContext);

  // creates the user in firebase
  // dispatches action to AppContext reducer (sets the user value)
  // context changes and other components can see the user value in the context

  const signupUser = async (email, password) => {
    try {
      setIsPending(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      dispatch({ type: ACTIONS.LOGIN_USER, payload: user });
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signupUser, error, isPending };
}
