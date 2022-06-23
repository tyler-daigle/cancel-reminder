import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState, useEffect } from "react";
import { AppContext, ACTIONS } from "../store/AppContext";

export default function useLogin() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useContext(AppContext);

  // creates the user in firebase
  // dispatches action to AppContext reducer (sets the user value)
  // context changes and other components can see the user value in the context

  // check if user is already logged in (saved to localstorage)
  useEffect(() => {
    if (window.localStorage.getItem("user")) {
      console.log("User already logged in");
      const user = window.localStorage.getItem("user");
      dispatch({ type: ACTIONS.LOGIN_USER, payload: user });
    }
  }, []);

  const loginUser = async (email, password) => {
    try {
      setIsPending(true);
      const res = await signInWithEmailAndPassword(auth, email, password);
      const user = res.user;
      dispatch({ type: ACTIONS.LOGIN_USER, payload: user });
      setIsPending(false);
      setError(null);
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  };

  return { loginUser, error, isPending };
}
