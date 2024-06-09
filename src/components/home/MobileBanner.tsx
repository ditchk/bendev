import { BannerAssets } from "@/constants";
import { myBannerAssets } from "@/types";
import React, { useEffect, useState } from "react";
import Imageloader from "../loaders/Imageloader";
import { useNavigate } from "react-router";
import { MdArrowRight } from "react-icons/md";

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
          await new Promise((resolve) => setTimeout(resolve, 5000));
          setIsLoading(false);
        };

        loadData();
      }, []);

  return (
    <div className="MobileBanner">
      <h1 className="adssOnTitle ml-5 mt-2">Services Highlight</h1>
      <span className="box-border flex flex-row justify-center items-center w-full text-slate-400 font-moon-dance">Swipe <MdArrowRight className="text-green-500" /></span>
      <div className="banner swipe-scrollbar">
          {BannerAssets.map((link: myBannerAssets) => {
            return (
              <React.Fragment>
                {isLoading ? (
                  <Imageloader />
                ): (
                  <img key={link.altText} src={link.Image} onClick={handleClick} alt={link.altText} loading="lazy" className="BannerImage cursor-pointer" />
                )}   
              </React.Fragment>
            )
          })}
      </div>
       
    </div>
  )
}

export default MobileBanner