import Footer from "@/components/shared/Footer"
import 
Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"



import { Outlet } from 'react-router'

const RootLayout: React.FC = () => {

  return (
      <>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
      </>
  );
};

export default RootLayout;