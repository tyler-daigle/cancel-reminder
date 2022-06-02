import Head from "next/head";
import Container from "@components/UI/Container";
import SubscriptionForm from "@components/SubscriptionForm";

export default function AddSubscription() {
  return (
    <>
      <Head>
        <title>Add A Subscription Service</title>
      </Head>

      <Container>
        <h2>Add A Subscription</h2>
        <SubscriptionForm />
      </Container>
    </>
  );
}
