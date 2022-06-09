import Head from "next/head";
import CenterContainer from "@components/UI/CenterContainer";
import SubscriptionForm from "@components/SubscriptionForm";

export default function AddSubscription() {
  return (
    <>
      <Head>
        <title>Add A Subscription Service</title>
      </Head>
      {/* TODO: Remove the MainContainer - the add page doesn't need grid positioning */}
      <CenterContainer>
        <SubscriptionForm />
      </CenterContainer>
    </>
  );
}
