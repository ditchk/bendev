import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <div className="w-full h-full md:flex flex-col">
      <Navbar />
      <section className="flex h-full flex-col">
        <Sidebar />
        <Outlet />
      </section>
       <Footer />
    </div>
  )
}

export default RootLayout
