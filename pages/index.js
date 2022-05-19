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
import DropDownSelector from "@components/UI/DropDownSelector";
import MonthlyTotal from "@components/MonthlyTotal";

export default function Index() {
  const [user, setUser] = useUser();
  const [subs, setSubs] = useSubs();

  const [listOneCollapsed, setListOneCollapsed] = useState(false);
  const [listTwoCollapsed, setListTwoCollapsed] = useState(false);
  const [monthlyTotalCollapsed, setMonthlyTotalCollapsed] = useState(false);

  const [sortBy, setSortBy] = useState("");
  const sortByOptions = ["Name", "Days Left"];

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
            <SubscriptionList subscriptions={subs.slice(0, 2)} />
          </CollapsingContainer>
        </Container>


        <Container>
          <ItemListToolbar>
            <CollapsingContainerHeader collapsed={listTwoCollapsed} onClick={() => setListTwoCollapsed(!listTwoCollapsed)}>
              Your Items
            </CollapsingContainerHeader>
            {!listTwoCollapsed &&
              <>
                <ItemCount count={subs.length} />
                <DropDownSelector selectedOption={sortBy} selectId="sortBy" labelText="Sort By" options={sortByOptions} onChange={(e) => setSortBy(e.target.value)} />
              </>
            }
          </ItemListToolbar>

          <CollapsingContainer collapsed={listTwoCollapsed}>
            <SubscriptionList subscriptions={subs} />
            <AddItemButton />
          </CollapsingContainer>
        </Container>

        <Container>
          <CollapsingContainerHeader collapsed={monthlyTotalCollapsed} onClick={() => setMonthlyTotalCollapsed(!monthlyTotalCollapsed)}>
            Monthly Total
          </CollapsingContainerHeader>
          <CollapsingContainer collapsed={monthlyTotalCollapsed}>
            <MonthlyTotal items={subs} />
          </CollapsingContainer>
        </Container>

      </MainContainer>
    </>
  );
}