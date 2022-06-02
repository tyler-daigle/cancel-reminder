import Head from "next/head";
import MainContainer from "@components/UI/MainContainer";
import SubscriptionForm from "@components/SubscriptionForm";

export default function AddSubscription() {
  return (
    <>
      <Head>
        <title>Add A Subscription Service</title>
      </Head>
      {/* TODO: Remove the MainContainer - the add page doesn't need grid positioning */}
      <h2>Add A Subscription</h2>
      <MainContainer>
        <SubscriptionForm />
      </MainContainer>
    </>
  );
}
