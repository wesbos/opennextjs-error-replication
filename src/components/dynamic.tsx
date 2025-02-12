const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
import { headers } from "next/headers";
import { connection } from "next/server";

export default async function Dynamic() {
  await connection();
  await headers();
  // Wait for time
  await wait(3000);
  return <div>Im a dynamic component!</div>;
}

