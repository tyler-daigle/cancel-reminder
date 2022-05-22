import Head from "next/head";

import { useState } from "react";

import useStore from "store/store";

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

  // visibility flags for the collapsing containers
  const expiringSoonListCollapsed = useStore(state => state.expiringSoonListCollapsed);
  const yourItemsListCollapsed = useStore(state => state.yourItemsListCollapsed);
  const calendarViewCollapsed = useStore(state => state.calendarViewCollapsed);
  const monthlyTotalViewCollapsed = useStore(state => state.monthlyTotalViewCollapsed);

  // toggles for the collapsing container
  const toggleExpiringSoonList = useStore(state => state.toggleExpiringSoonList);
  const toggleYourItemsList = useStore(state => state.toggleYourItemsList);
  const toggleCalendarView = useStore(state => state.toggleCalendarView);
  const toggleMonthlyView = useStore(state => state.toggleMonthlyView);

  const [sortBy, setSortBy] = useState("");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [confirmDeleteDialogOpen, setConfirmDeleteDialogOpen] = useState(false);
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(Months.OCTOBER);
  const sortByOptions = ["Name", "Days Left"];

  const username = useStore(state => state.username);

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
        <h1>{username}'s Cancel Reminder</h1>

        {/* Expiring Soon List */}
        <Container>
          <CollapsingContainerHeader
            collapsed={expiringSoonListCollapsed}
            onClick={toggleExpiringSoonList}>
            Expiring Soon
          </CollapsingContainerHeader>

          <CollapsingContainer collapsed={expiringSoonListCollapsed}>
            <SubscriptionList subscriptions={subs.slice(0, 2)} />
          </CollapsingContainer>
        </Container>

        {/* Your Items container */}
        <Container>
          <ItemListToolbar>
            <CollapsingContainerHeader
              collapsed={yourItemsListCollapsed}
              onClick={toggleYourItemsList}>
              Your Items
            </CollapsingContainerHeader>
            {!yourItemsListCollapsed &&
              <>
                <ItemCount count={subs.length} />
                <DropDownSelector selectedOption={sortBy} selectId="sortBy" labelText="Sort By" options={sortByOptions} onChange={(e) => setSortBy(e.target.value)} />
              </>
            }
          </ItemListToolbar>

          <CollapsingContainer collapsed={yourItemsListCollapsed}>
            <SubscriptionList subscriptions={subs} />
            <AddItemButton onClick={() => setAddItemDialogOpen(true)} />
          </CollapsingContainer>
        </Container>

        {/* Calendar Container */}
        <Container>
          <CollapsingContainerHeader
            collapsed={calendarViewCollapsed}
            onClick={toggleCalendarView}>
            Calendar View
          </CollapsingContainerHeader>
          <CollapsingContainer collapsed={calendarViewCollapsed}>
            <Calendar month={currentMonth} year={2022} monthInc={incMonth} monthDec={decMonth} />
          </CollapsingContainer>
        </Container>

        {/* Monthly Total */}

        <Container>
          <CollapsingContainerHeader
            collapsed={monthlyTotalViewCollapsed}
            onClick={() => { console.log("click"); toggleMonthlyView(); }}>
            Monthly Total
          </CollapsingContainerHeader>
          <CollapsingContainer collapsed={monthlyTotalViewCollapsed}>
            <MonthlyTotal items={subs} />
          </CollapsingContainer>
        </Container>


      </MainContainer>
    </>
  );
}