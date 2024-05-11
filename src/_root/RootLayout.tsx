import Footer from "@/components/shared/Footer"
import 
Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"
import { motion, useScroll } from "framer-motion"



import { Outlet } from 'react-router'

const RootLayout: React.FC = () => {

  const { scrollYProgress } = useScroll();

  return (
      <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
      </>
  );
};

export default RootLayout;