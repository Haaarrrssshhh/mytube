import { userIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function InfiniteScroll({
    isManual = false,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
}: {
    isManual?: boolean;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    fetchNextPage: () => void;
}) {
    const { targetRef, isIntersecting } = userIntersectionObserver({
        threshold: 0.5,
        rootMargin: "100px"
    });

    useEffect(()=>{
        if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual){
            fetchNextPage();
        }
    },[isIntersecting, hasNextPage, isFetchingNextPage, isManual]);
    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div ref={targetRef} className="h-1"/>
            { hasNextPage ? 
                <Button 
                    variant={"secondary"} 
                    disabled={!hasNextPage || isFetchingNextPage} 
                    onClick={() => fetchNextPage()}>
                        {isFetchingNextPage ? "Loading" : "Load More"}
                </Button>    
                :
                (
                    <p className="text-xs text-muted-foreground">
                        You have reached the end of the list
                    </p>
                )
            }
            {/* Infinite scroll logic or UI goes here */}
        </div>
    );
}