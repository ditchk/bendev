import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <div className="w-full md:flex flex-col">
      <Navbar />
      <section className="flex flex-col gap-5 h-screen w-full">
        <Sidebar />
        <Outlet />
        <Footer />
      </section>
      
    </div>
  )
}

export default RootLayout
