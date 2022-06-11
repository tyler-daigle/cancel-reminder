import { createContext, useReducer, useEffect } from "react";
import { getUserSubs } from "../firebase/config";
import { Router, useRouter } from "next/router";

export const AppContext = createContext();

export const ACTIONS = {
  CHANGE_NAME: "CHANGE_NAME",
  SET_SUBS: "SET_SUBS",
  SET_ERROR: "SET_ERROR",
  ADD_SUB: "ADD_SUB",
  LOGIN_USER: "LOGIN_USER",
};

// TODO: move reducer to separate file

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_NAME:
      return { ...state, name: action.payload };

    case ACTIONS.SET_SUBS:
      return { ...state, subscriptions: action.payload };

    case ACTIONS.ADD_SUB:
      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };

    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };

    case ACTIONS.LOGIN_USER:
      console.log("ACTION: LOGIN_USER");
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default function AppContextProvider({ children }) {
  const initialState = { name: "", subscriptions: [], error: null, user: null };
  const router = useRouter();

  const [state, dispatch] = useReducer(reducer, initialState);

  const addSubscription = (subscription) => {
    // TODO: some error checking here?
    dispatch({ type: ACTIONS.ADD_SUB, payload: subscription });
  };

  // Load the subscriptions from the server on the first load
  useEffect(() => {
    if (!state.user) {
      router.push("/signup");
      return;
    }

    const loadSubs = async () => {
      try {
        // TODO: this is when the context first is mounted - check if user is logged in
        // then check for subs. Setup event listener for when data is added to firestore.
        const subList = await getUserSubs(100);
        dispatch({ type: ACTIONS.SET_SUBS, payload: subList });
      } catch (err) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: "Error loading data." });
        console.log(err.message);
      }
    };
    loadSubs();
  }, []);

  return (
    <AppContext.Provider
      value={{
        subscriptions: state.subscriptions,
        addSubscription,
        error: state.error,
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
