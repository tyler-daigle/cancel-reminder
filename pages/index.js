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
import BackDrop from "@components/UI/BackDrop";

// Components
import SubscriptionList from "@components/SubscriptionList";
import CollapsingContainerHeader from "@components/CollapsingContainerHeader";
import ItemListToolbar from "@components/ItemListToolbar";
import ItemCount from "@components/ItemCount";
import DropDownSelector from "@components/UI/DropDownSelector";
import MonthlyTotal from "@components/MonthlyTotal";
import DialogContainer from "@components/UI/DialogContainer";

export default function Index() {
  const [user, setUser] = useUser();
  const [subs, setSubs] = useSubs();

  const [listOneCollapsed, setListOneCollapsed] = useState(false);
  const [listTwoCollapsed, setListTwoCollapsed] = useState(false);
  const [monthlyTotalCollapsed, setMonthlyTotalCollapsed] = useState(false);

  const [sortBy, setSortBy] = useState("");
  const [dialogOpen, setDialogOpen] = useState(true);

  const sortByOptions = ["Name", "Days Left"];

  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <BackDrop dialogOpen={dialogOpen} />

      <MainContainer>
        <DialogContainer open={dialogOpen}>
          <h1>This is a test</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore in eos optio deserunt quia sapiente et veniam vel, maxime recusandae perferendis fuga illum rem dolorem, ducimus voluptate expedita! Commodi officiis aut beatae excepturi sed. Error minima sapiente possimus deleniti sequi odio consectetur eos veniam fuga, quis amet voluptate! Velit dolores totam magni minima quo voluptas obcaecati esse error quibusdam aut reiciendis voluptate animi molestias ex suscipit consectetur assumenda, quos numquam. Ipsam molestiae, perferendis sed ipsum nihil at alias iusto libero error, voluptatum provident et tenetur! Nesciunt veritatis provident assumenda, optio nisi, inventore explicabo, sunt suscipit expedita qui consequatur reprehenderit.
          </p>
        </DialogContainer>
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