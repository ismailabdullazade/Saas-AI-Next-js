"use client"

import {Button} from "@/components/ui/button"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "./Sidebar"
import { useEffect, useState } from "react"

const MobileSidebar = () => {

  const [isMounted,setIsMounted] = useState(false)

  useEffect(()=>{
    setIsMounted(true)
  },[])

  if(!isMounted){
    return null
  }
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="md:hidden"/>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar/>
        </SheetContent>
      </Sheet>

    </div>
  )
}

export default MobileSidebar