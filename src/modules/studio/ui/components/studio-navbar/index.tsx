import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { AuthButton } from "@/modules/auth/ui/auth-button";
import { StudioUploadModal } from "../studio-upload-modal";

export function StudioNavbar(){
    return(
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50 border-b shadow-md">
            <div className="flex items-center gap-4 w-full">
                {/* Menu and Logo */}
                <div className="flex items-center flex-shrink-0">
                    <SidebarTrigger />
                    <Link href ="/studio">
                        <div className="p-4 flex items-center gap-1">
                            <p className="text-xl font-semibold tracking-tight">Studio</p>
                            <Image src={`/assets/logo.svg`} alt="logo" height={32} width={32} />
                        </div>
                    </Link>
                </div>
                {/* Spacer */}
                <div className="flex-1"></div>
                {/* Auth Button */}
                <div className="flex-shring-0 items-center flex gap-5">
                    <StudioUploadModal />
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
}