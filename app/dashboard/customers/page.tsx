async function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  // await delay(1500);
  return <p>Customers Page</p>;
}
