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
      await new Promise((resolve) => setTimeout(resolve, 3000));
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
      <div className="flex w-full h-full md:flex flex-col slide-down-fade">
        <Navbar />
        <Sidebar />
        <section className="flex flex-col">
          <Outlet />
        </section>
        <section className="flex flex-1 relative">
          <Footer />
        </section>
      </div>
      )}
    </>
  );
};

export default RootLayout;