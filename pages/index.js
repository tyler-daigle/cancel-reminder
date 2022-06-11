import Head from "next/head";
import Link from "next/link";

import { useState, useEffect } from "react";

import { useContext } from "react";
import { AppContext } from "store/AppContext";

// custom hooks

// UI
import MainContainer from "@components/UI/MainContainer";
import AddItemButton from "@components/UI/AddItemButton";
import CollapsingContainer from "@components/UI/CollapsingContainer";
import Container from "@components/UI/Container";
import FlexContainer from "@components/UI/FlexContainer";

// Components
import SubscriptionList from "@components/SubscriptionList";
import CollapsingContainerHeader from "@components/CollapsingContainerHeader";
import ItemListToolbar from "@components/ItemListToolbar";
import ItemCount from "@components/ItemCount";
import DropDownSelector from "@components/UI/DropDownSelector";
import MonthlyTotal from "@components/MonthlyTotal";
import Calendar from "@components/Calendar";
import TitleBar from "@components/TitleBar";

import { Months } from "utils/calendar";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();

  const [listOneCollapsed, setListOneCollapsed] = useState(false);
  const [listTwoCollapsed, setListTwoCollapsed] = useState(false);
  const [monthlyTotalCollapsed, setMonthlyTotalCollapsed] = useState(false);
  const [calendarCollapsed, setCalendarCollapsed] = useState(false);

  const [sortBy, setSortBy] = useState("");

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

  const { subscriptions, user } = useContext(AppContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);
  return (
    <>
      <Head>
        <title>Cancel Reminder</title>
      </Head>

      <TitleBar currentTitle={"Cancel Reminder"} />
      <MainContainer>
        {/* Anything placed in here will throw off the 
         grid settings in Container.module.css and MainContainer.module.css since .mainContainer is set as a grid at the desktop breakpoint */}

        <FlexContainer>
          <Container>
            <CollapsingContainerHeader
              collapsed={listOneCollapsed}
              onClick={() => setListOneCollapsed(!listOneCollapsed)}
            >
              Expiring Soon
            </CollapsingContainerHeader>

            <CollapsingContainer collapsed={listOneCollapsed}>
              <SubscriptionList subscriptions={subscriptions.slice(0, 2)} />
            </CollapsingContainer>
          </Container>

          <Container>
            <ItemListToolbar>
              <CollapsingContainerHeader
                collapsed={listTwoCollapsed}
                onClick={() => setListTwoCollapsed(!listTwoCollapsed)}
              >
                Your Items
              </CollapsingContainerHeader>
              {!listTwoCollapsed && (
                <>
                  <ItemCount count={subscriptions.length} />
                  <DropDownSelector
                    selectedOption={sortBy}
                    selectId="sortBy"
                    labelText="Sort By"
                    options={sortByOptions}
                    onChange={(e) => setSortBy(e.target.value)}
                  />
                </>
              )}
            </ItemListToolbar>
            <CollapsingContainer collapsed={listTwoCollapsed}>
              <SubscriptionList subscriptions={subscriptions} />
              <AddItemButton />
            </CollapsingContainer>
          </Container>
        </FlexContainer>

        <FlexContainer>
          <Container>
            <CollapsingContainerHeader
              collapsed={calendarCollapsed}
              onClick={() => setCalendarCollapsed(!calendarCollapsed)}
            >
              Calendar View
            </CollapsingContainerHeader>
            <CollapsingContainer collapsed={calendarCollapsed}>
              <Calendar
                month={currentMonth}
                year={2022}
                monthInc={incMonth}
                monthDec={decMonth}
              />
            </CollapsingContainer>
          </Container>

          <Container>
            <CollapsingContainerHeader
              collapsed={monthlyTotalCollapsed}
              onClick={() => setMonthlyTotalCollapsed(!monthlyTotalCollapsed)}
            >
              Monthly Total
            </CollapsingContainerHeader>
            <CollapsingContainer collapsed={monthlyTotalCollapsed}>
              <MonthlyTotal items={subscriptions} />
            </CollapsingContainer>
          </Container>
        </FlexContainer>
      </MainContainer>
    </>
  );
}
