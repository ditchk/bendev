import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <div className="flex w-full h-full md:flex flex-col slide-down-fade">
      <Navbar />
      <Sidebar />
      <section className="flex flex-col h-full">
        <Outlet />
      </section>
      <section className="flex flex-1 relative">
        <Footer />
      </section>
    </div>
  )
}

export default RootLayout
