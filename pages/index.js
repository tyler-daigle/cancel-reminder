import Head from "next/head";
import useUser from "../hooks/useUser";

// import { useState, useEffect } from "react";

export default function Index() {
  const [user, setUser] = useUser();

  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <div>
        <h1>Cancel Reminder</h1>
        <h2>Hello, {user.username}</h2>
      </div>
    </>
  );
}