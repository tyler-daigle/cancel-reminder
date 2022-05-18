import Head from "next/head";
import useUser from "../hooks/useUser";
import useSubs from "../hooks/useSubs";

// import { useState, useEffect } from "react";

export default function Index() {
  const [user, setUser] = useUser();
  const [subs, setSubs] = useSubs();

  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <div>
        <h1>Cancel Reminder</h1>
        <h2>Hello, {user.username}</h2>
        <h3>You have {subs.length} subscriptions.</h3>
      </div>
    </>
  );
}