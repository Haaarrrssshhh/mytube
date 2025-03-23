// "use client";

import { HomeView } from "@/modules/home/ui/views/home-view";
import { HydrateClient, trpc } from "@/trpc/server";


export const dynamic = "force-dynamic";

export default async function Page(
    {searchParams}: 
    {
      searchParams: Promise<{categoryId?:string;}>
    }
  ) 
  {

    const { categoryId } = await searchParams;
    void trpc.categories.getMany.prefetch();
    return (
      <HydrateClient>
        <HomeView categoryId={categoryId} />
      </HydrateClient>
    );
}
