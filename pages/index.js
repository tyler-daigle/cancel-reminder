import Head from "next/head";

import { useState } from "react";

// custom hooks
import useUser from "../hooks/useUser";
import useSubs from "../hooks/useSubs";

// UI
import MainContainer from "@components/UI/MainContainer";
import AddItemButton from "@components/UI/AddItemButton";
import CollapsingContainer from "@components/UI/CollapsingContainer";
import Container from "@components/UI/Container";

// Components
import SubscriptionList from "@components/SubscriptionList";
import CollapsingContainerHeader from "@components/CollapsingContainerHeader";
import ItemListToolbar from "@components/ItemListToolbar";
import ItemCount from "@components/ItemCount";

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

        <Container>
          <CollapsingContainerHeader collapsed={listOneCollapsed} onClick={() => setListOneCollapsed(!listOneCollapsed)}>
            Expiring Soon
          </CollapsingContainerHeader>

          <CollapsingContainer collapsed={listOneCollapsed}>
            <SubscriptionList subscriptions={subs} />
          </CollapsingContainer>
        </Container>


        <Container>
          <ItemListToolbar>
            <CollapsingContainerHeader collapsed={listTwoCollapsed} onClick={() => setListTwoCollapsed(!listTwoCollapsed)}>
              Your Items
            </CollapsingContainerHeader>
            <ItemCount count={subs.length} />
          </ItemListToolbar>

          <CollapsingContainer collapsed={listTwoCollapsed}>
            <SubscriptionList subscriptions={subs.slice(3)} />
            <AddItemButton />
          </CollapsingContainer>
        </Container>

      </MainContainer>
    </>
  );
}