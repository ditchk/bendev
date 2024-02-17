import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"
import Sidebar from "@/components/shared/Sidebar"

import { Outlet } from 'react-router'

import React, { useEffect, useState } from 'react';
import Homepageloader from "@/components/loaders/Homepageloader"

const RootLayout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Simulate loading data
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex flex-1 min-h-screen min-w-full justify-center items-center h-full animate-out fade-out-100">
          <Homepageloader />
        </div>
      ) : (
      <>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
      </>
      )}
    </>
  );
};

export default RootLayout;