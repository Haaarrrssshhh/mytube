import React from "react";

export default function Page({children}:{children:React.ReactNode}){
    return(
        <div>
            only logged in users see this
            {children}
        </div>
    )
}