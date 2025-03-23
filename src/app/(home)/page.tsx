// "use client";

import { HydrateClient, trpc } from "@/trpc/server";
import { PageClient } from "./client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";


export default async function Home() {
  // void trpc.hello.prefetch({ text: "Harsh"})
  return (
    <HydrateClient>
      <Suspense fallback={<p>FUck Loading...</p>}>
        <ErrorBoundary fallback={<p>Error....</p>}>
          <PageClient />
        </ErrorBoundary>
      </Suspense>
    </HydrateClient>
  );
}
