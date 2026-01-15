
async function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export default async function Page() {
  // await delay(1500);
  return <p>Customers Page</p>;
}
