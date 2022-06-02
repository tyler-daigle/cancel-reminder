import { createContext, useReducer, useEffect } from "react";

export const AppContext = createContext();

const ACTIONS = {
  CHANGE_NAME: "CHANGE_NAME",
  SET_SUBS: "SET_SUBS",
  SET_ERROR: "SET_ERROR",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_NAME:
      return { ...state, name: action.payload };
    case ACTIONS.SET_SUBS:
      return { ...state, subscriptions: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}

const initialState = { name: "", subscriptions: [], error: null };

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const loadSubs = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/subscriptions");
        if (!res.ok) {
          throw new Error(res.statusText);
        } else {
          const data = await res.json();
          dispatch({ type: ACTIONS.SET_SUBS, payload: data });
        }
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
