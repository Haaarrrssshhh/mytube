"use client";

import { trpc } from "@/trpc/client"
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import { FilterCarousel } from "@/components/filter-carousel";
import { useRouter } from "next/navigation";

export function CategoriesSection(        
        { categoryId }: 
        { categoryId?:string }
    ){
        return(
            <Suspense fallback={<FilterCarousel isLoading data={[]} onSelect={()=>{}} />}>
                <ErrorBoundary fallback={<p>Error...</p>}>
                    <CategoriesSectionSuspense categoryId={categoryId} />
                </ErrorBoundary>
            </Suspense>
        )
    }

function CategoriesSectionSuspense(        
        { categoryId }: 
        { categoryId?:string }
    )
    {
        const [categories] = trpc.categories.getMany.useSuspenseQuery()
        const router = useRouter()
        const data = categories.map((category)=>({
            value: category.id,
            label: category.name
        }))
        const onSelect =(value: string | null) => {
            const url = new URL(window.location.href);

            if(value){
                url.searchParams.set("categoryId",value);
            }
            else{
                url.searchParams.delete("categoryId");
            }
            router.push(url.toString())
        }
        return(
            <FilterCarousel onSelect={onSelect} value={categoryId} data={data}/>
        )
}