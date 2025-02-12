import { headers } from "next/headers";

export default async function Home() {
  const head = await headers();
  console.log(head.get('referrer'));
  return (
    <div>
      <p>Implicit Dynamic. Simply calling headers opts the page into dynamic mode.</p>
    </div>
  );
}
