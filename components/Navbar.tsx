<<<<<<< HEAD
import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'
import MobileSidebar from './MobileSidebar'

const Navbar = () => {
  return (
    <div className='flex items-center p-4'>
        <MobileSidebar/>
        <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/'/>

        </div>
    </div>
  )
}

export default Navbar
=======
import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

const Navbar = ()=>{
    return (
        <div className="flex items-center p-4">

            <MobileSidebar/>

            <div className="flex w-full justify-end">
                <UserButton afterSignOutUrl="/"/>
            </div>
        </div>
    )
}

export default Navbar;
>>>>>>> af376d95a9e9f4d073d01c649fe7436b3012c701
