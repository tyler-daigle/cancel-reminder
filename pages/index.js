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
import ConfirmDeleteDialog from "@components/dialogs/ConfirmDeleteDialog";
import ConfirmCancelDialog from "@components/dialogs/ConfirmCancelDialog";

// Components
import SubscriptionList from "@components/SubscriptionList";
import CollapsingContainerHeader from "@components/CollapsingContainerHeader";
import ItemListToolbar from "@components/ItemListToolbar";
import ItemCount from "@components/ItemCount";
import DropDownSelector from "@components/UI/DropDownSelector";
import MonthlyTotal from "@components/MonthlyTotal";
import AddItemDialog from "@components/dialogs/AddItemDialog";
import Calendar from "@components/Calendar";

import { Months } from "utils/calendar";

export default function Index() {
  const [user, setUser] = useUser();
  const [subs, setSubs] = useSubs();

  const [listOneCollapsed, setListOneCollapsed] = useState(false);
  const [listTwoCollapsed, setListTwoCollapsed] = useState(false);
  const [monthlyTotalCollapsed, setMonthlyTotalCollapsed] = useState(false);

  const [sortBy, setSortBy] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(Months.OCTOBER);
  const sortByOptions = ["Name", "Days Left"];

  const incMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const decMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth(currentMonth - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <MainContainer>

        <ConfirmCancelDialog open={dialogOpen} />
        <ConfirmDeleteDialog open={confirmDeleteDialogOpen} />
        <AddItemDialog open={addItemDialogOpen} onCancel={() => setAddItemDialogOpen(false)} />
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
            <AddItemButton onClick={() => setAddItemDialogOpen(true)} />
          </CollapsingContainer>
        </Container>

        <Container>
          <CollapsingContainer collapsed={false}>
            <CollapsingContainerHeader collapsed={false}>
              Calendar View
            </CollapsingContainerHeader>

            <Calendar month={currentMonth} year={2022} monthInc={incMonth} monthDec={decMonth} />
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