<<<<<<< HEAD
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

const DashboardLayout = ({children}:{children:React.ReactNode})=>{
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar/>
            </div>
           <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
            
        </div>

=======
import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"

const DashboardLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="h-full relative">

            <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <div>
                    <Sidebar/>
                </div>
            </div>
            
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
        
>>>>>>> af376d95a9e9f4d073d01c649fe7436b3012c701
    )
}

export default DashboardLayout