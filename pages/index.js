import Head from "next/head";

import { useState } from "react";

// custom hooks
import useUser from "../hooks/useUser";
import useSubs from "../hooks/useSubs";

// UI
import MainContainer from "@components/UI/MainContainer";
import AddItemButton from "@components/UI/AddItemButton";
import CollapsingContainer from "@components/UI/CollapsingContainer";

// Components
import SubscriptionList from "@components/SubscriptionList";
import ExpiringSoonHeader from "@components/ExpiringSoonHeader";

export default function Index() {
  const [user, setUser] = useUser();
  const [subs, setSubs] = useSubs();
  const [listOneCollapsed, setListOneCollapsed] = useState(false);
  const [listTwoCollapsed, setListTwoCollapsed] = useState(false);

  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <MainContainer>
        <h1>Cancel Reminder</h1>

        <ExpiringSoonHeader collapsed={listOneCollapsed} onClick={() => setListOneCollapsed(!listOneCollapsed)} />
        <CollapsingContainer collapsed={listOneCollapsed}>
          <SubscriptionList subscriptions={subs} />
        </CollapsingContainer>

        <h2>Your Items</h2>
        <CollapsingContainer collapsed={listTwoCollapsed}>
          <SubscriptionList subscriptions={subs.slice(3)} />
        </CollapsingContainer>
        <AddItemButton />
      </MainContainer>
    </>
  );
}