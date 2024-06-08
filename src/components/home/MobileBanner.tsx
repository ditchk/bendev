import { BannerAssets } from "@/constants";
import { myBannerAssets } from "@/types";
import React, { useEffect, useState } from "react";
import Imageloader from "../loaders/Imageloader";
import { useNavigate } from "react-router";

const MobileBanner = () => {
    const navigate = useNavigate()

    const handleClick = () => (
      navigate('/contact')
    )
// loaders
      const [isLoading, setIsLoading] = useState(true);

      useEffect(() => {
        const loadData = async () => {
          // Simulate loading data
          await new Promise((resolve) => setTimeout(resolve, 2000));
          setIsLoading(false);
        };

        loadData();
      }, []);

  return (
    <div className="MobileBanner relative">
      
      <h1 className="adssOnTitle ml-5 mt-2">Services Highlight</h1>
      <span className="text-slate-400 font-moon-dance">Swipe left</span>
      <div className="banner swipe-scrollbar">
          {BannerAssets.map((link: myBannerAssets) => {
            return (
              <React.Fragment>
                {isLoading ? (
                  <Imageloader />
                ): (
                  <img src={link.Image} onClick={handleClick} alt={link.altText} loading="lazy" className="BannerImage cursor-pointer" />
                )}   
              </React.Fragment>
            )
          })}
      </div>
       
    </div>
  )
}

export default MobileBanner