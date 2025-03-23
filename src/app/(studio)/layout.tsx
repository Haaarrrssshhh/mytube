import { StudioLayout } from "@/modules/studio/ui/layouts/studio-layout";
import React from "react";

export default function Layout({children}:{children:React.ReactNode}){
    return(
        <div>
            <StudioLayout>
                {children}
            </StudioLayout>
        </div>
    )
}