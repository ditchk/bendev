import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <div className="w-full h-full md:flex flex-col slide-down-fade">
      <Navbar />
      <section className="flex flex-row h-full overflow-scroll custom-scrollbar scroll-smooth">
        <Sidebar />
        <Outlet />
      </section>
      <section>
        <Footer />
      </section> 
    </div>
  )
}

export default RootLayout
