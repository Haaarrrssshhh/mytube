


import { HomeLayout } from "@/modules/home/ui/layouts/home-layout";
import React from "react";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div>
            <HomeLayout>
                {children}
            </HomeLayout>
        </div>
    )
}