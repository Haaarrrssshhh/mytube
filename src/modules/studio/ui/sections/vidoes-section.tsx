"use client";

import { InfiniteScroll } from "@/components/infinite-scroll";
import { DEFAULT_LIMIT } from "@/constants";
import { trpc } from "@/trpc/client";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export function VideosSection(){
    return(
        <Suspense fallback={<p>Loading....</p>}>
            <ErrorBoundary fallback={<p>Error....</p>}>
                <VideosSectionSuspense />
            </ErrorBoundary>
        </Suspense>
    )
}

export function VideosSectionSuspense(){
    const [data,query] = trpc.studio.getMany.useSuspenseInfiniteQuery({
        limit:DEFAULT_LIMIT,
    },{
        getNextPageParam:(lastPage) => lastPage.nextCursor,
    })
    return(
        <div>
            {JSON.stringify(data)}
            <InfiniteScroll 
            // set below is manual to true, if you want a load button or if you want auto scrolling, leave it off
            // isManual
            hasNextPage={query.hasNextPage}
            isFetchingNextPage={query.isFetchingNextPage}
            fetchNextPage={query.fetchNextPage}
            />
            {/* <div ref={targetRef}/> */}
        </div>
    )
}