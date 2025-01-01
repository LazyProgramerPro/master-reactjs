import { useEffect } from "react";

const Subscription = () => {
  const sendSubscriptionEmail = async () => {
    await fetch("/api/sendSubscriptionEmail", { method: "POST" });
    //redirect to the another page
  };

  const onSubscription = () => {
    sendSubscriptionEmail();
  };

  return <button onClick={onSubscription}>Subscribe</button>;
};

// const SubscribedPage = () => {
//   useEffect(() => {
//     const sendSubscriptionEmail = async () => {
//       await fetch("/api/sendSubscriptionEmail", { method: "POST" });
//     };

//     sendSubscriptionEmail();
//   }, []);
// };

// export default SubscribedPage;
// //
