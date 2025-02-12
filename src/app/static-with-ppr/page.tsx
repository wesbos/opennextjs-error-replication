import Dynamic from "@/components/dynamic";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <p>Static with PPR. The page is static, but the component is dynamic and wrapped in a suspense boundary.</p>
      <Suspense fallback={<p>Loading...</p>}>
        <Dynamic />
      </Suspense>
    </div>
  );
}
export const experimental_ppr = true;
