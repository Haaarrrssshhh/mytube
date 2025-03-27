import { VideosSection } from "../sections/vidoes-section";

export function StudioView(){
    return(
        <div className="flex flex-col gap-y-6 pt-2.5">
            <div className="px-4">
               <h1 className="text-2xl font-bold">Channel Content</h1> 
               <p className="text-xs text-muted-foreground"> Manage your channel content and vidoes</p>
            </div>
            <VideosSection />
        </div>
    )
}