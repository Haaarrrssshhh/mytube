"use client";

import { trpc } from "@/trpc/client";

export const PageClient = () =>{
    const [ data ] = trpc.hello.useSuspenseQuery({
        text:"Harsh"
    })
    return(
        <div>
            Page Cleint says: {data.greeting}
        </div>
    )
}