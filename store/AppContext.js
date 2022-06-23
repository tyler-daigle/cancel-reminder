import { createContext, useReducer, useEffect } from "react";
import { getUserSubs, addSub, logout } from "../firebase/config";
import { useRouter } from "next/router";
import Subscription from "types/Subscription";

export const AppContext = createContext();

export const ACTIONS = {
  CHANGE_NAME: "CHANGE_NAME",
  SET_SUBS: "SET_SUBS",
  SET_ERROR: "SET_ERROR",
  ADD_SUB: "ADD_SUB",
  LOGIN_USER: "LOGIN_USER",
  LOGOUT_USER: "LOGOUT_USER",
};

// TODO: move reducer to separate file

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_NAME:
      return { ...state, name: action.payload };

    case ACTIONS.SET_SUBS:
      console.log(`SET_SUBS: ${action.payload}`);
      return { ...state, subscriptions: action.payload };

    case ACTIONS.ADD_SUB:
      // add the user ID to the subscription
      action.payload.uid = state.user.uid;
      console.log("Adding:", action.payload);

      return {
        ...state,
        subscriptions: [...state.subscriptions, action.payload],
      };

    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };

    case ACTIONS.LOGIN_USER:
      console.log("ACTION: LOGIN_USER");

      //save the user to the localstorage
      window.localStorage.setItem("user", action.payload);
      return { ...state, user: action.payload };

    case ACTIONS.LOGOUT_USER:
      window.localStorage.removeItem("user");
      return { ...state, user: null };
    default:
      return state;
  }
}

export default function AppContextProvider({ children }) {
  const initialState = { name: "", subscriptions: [], error: null, user: null };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addSubscription = async (subscription) => {
    // TODO: some error checking here?

    console.log("Adding: ", subscription);
    const doc = await addSub(subscription);
    dispatch({ type: ACTIONS.ADD_SUB, payload: subscription });
  };

  const logoutUser = async () => {
    await logout();
    console.log("logging out");
    dispatch({ type: ACTIONS.LOGOUT_USER });
  };
  // initial load of subscriptions after logging in
  useEffect(() => {
    const loadSubs = async () => {
      try {
        // TODO: this is when the context first is mounted - check if user is logged in
        // then check for subs. Setup event listener for when data is added to firestore.

        // check user id and get subs for that user

        const subList = await getUserSubs(state.user.uid);
        const subs = subList.map(
          (sub) =>
            new Subscription(
              sub.name,
              sub.billingPeriod,
              sub.price,
              sub.startDate.toDate(),
              sub.isActive,
              sub.logo
            )
        );
        dispatch({ type: ACTIONS.SET_SUBS, payload: subs });
      } catch (err) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: "Error loading data." });
        console.log(err.message);
      }
    };

    // only grab the subs once the user is actually logged in
    if (state.user) {
      loadSubs();
    }
  }, [state.user]);

  return (
    <AppContext.Provider
      value={{
        subscriptions: state.subscriptions,
        addSubscription,
        error: state.error,
        user: state.user,
        logoutUser,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
