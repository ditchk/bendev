import { BannerAssets } from "@/constants";
import { myBannerAssets } from "@/types";
import React, { useEffect, useRef, useState } from "react";

const MobileBanner = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
          container.addEventListener('touchstart', handleTouchStart);
          container.addEventListener('touchmove', handleTouchMove);
          container.addEventListener('touchend', handleTouchEnd);
        }
      
        return () => {
          if (container) {
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleTouchEnd);
          }
        };
      }, []);
      
      const touchStartX = useRef(0);
      const touchDeltaX = useRef(0);
      
      const handleTouchStart = (event: TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
      };
      
      const handleTouchMove = (event: TouchEvent) => {
        const touchEndX = event.touches[0].clientX;
        touchDeltaX.current = touchStartX.current - touchEndX;
        const newScrollPosition = scrollPosition - touchDeltaX.current;
        setScrollPosition(newScrollPosition);
      };
      
      const handleTouchEnd = () => {
        touchDeltaX.current = 0;
      };
// loaders

  return (
    <div className="MobileBanner">
      {BannerAssets.map((link: myBannerAssets) => {
            return (
              <React.Fragment>
                  <img src={link.Image} alt="" loading="lazy" className="BannerImage outline outline-2 outline-white animate-in slide-in-from-left-36" /> 
              </React.Fragment>
            )
        })}
    </div>
  )
}

export default MobileBanner