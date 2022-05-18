import Head from "next/head";

// custom hooks
import useUser from "../hooks/useUser";
import useSubs from "../hooks/useSubs";

// UI
import MainContainer from "../components/MainContainer";

import SubscriptionList from "../components/SubscriptionList";
import AddItemButton from "../components/AddItemButton";

export default function Index() {
  const [user, setUser] = useUser();
  const [subs, setSubs] = useSubs();

  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <MainContainer>
        <h1>Cancel Reminder</h1>

        <h2>Expiring Soon</h2>
        <SubscriptionList subscriptions={subs} />
        <h2>Your Items</h2>
        <SubscriptionList subscriptions={subs.slice(3)} />
        <AddItemButton />
      </MainContainer>
    </>
  );
}