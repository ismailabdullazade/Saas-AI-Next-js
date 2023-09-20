"use client"

import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";

interface MobileSidebarProps {
    apiLimitCount:number;
}

const MobileSidebar = ({apiLimitCount}:MobileSidebarProps) => {

    const [isMounted,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted){
        return null
    }

    return (
        <Sheet>
            <SheetTrigger>
                    <Menu className="md:hidden"/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar apiLimitCount={apiLimitCount}/>
            </SheetContent>
        </Sheet>


    )
}

export default MobileSidebar