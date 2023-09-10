import Sidebar from "@/components/Sidebar"
import Navbar from "@/components/Navbar"
import { getApiLimit } from "@/lib/api-limit"

const DashboardLayout = async ({children}:{children:React.ReactNode}) => {
    const apiLimitCount = await getApiLimit();
    return (
        <div className="h-full relative">

            <div className="hidden h-full md:w-72 md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <div>
                    <Sidebar apiLimitCount={apiLimitCount}/>
                </div>
            </div>
            
            <main className="md:pl-72">
                <Navbar/>
                {children}
            </main>
        </div>
        
    )
}

export default DashboardLayout