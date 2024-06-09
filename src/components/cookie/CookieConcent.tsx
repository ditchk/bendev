import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookieConcent: React.FC = () => {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    setHasAcceptedCookies(true);
  };

  const Declined = () => {
    setHasAcceptedCookies(false)
  }

  return (
    <div className="flex w-full h-fit animate-in slide-in-from-bottom-32 duration-1000">
      <CookieConsent
        location="bottom"
        buttonText="I accept"
        declineButtonText="I decline"
        onAccept={handleAcceptCookies}
        setDeclineCookie={true}
        onDecline={Declined}
        acceptOnScroll
        acceptOnScrollPercentage={100}
        enableDeclineButton
        expires={2}
        declineButtonStyle={{background: "white", color: "gray", borderRadius: "10px", padding: "5px 20px"}} 
        style={{background: "black",  width: "90%", opacity: "0.9", margin: "2px", fontFamily: "sans-serif", fontWeight: "lighter", fillOpacity: "0.5", left: "0", borderRadius: "10px", fontSize: "12px", justifyContent: "start", justifySelf: "end", animation: "ease-in-out"}}
        buttonStyle={{background: "teal", color: "white", borderRadius: "10px", padding: "5px 20px"}}
      >
        <h2 className="text-xs text-white">This site uses cookies to improve your experience. Learn more in our{" "}<a href="/privacy-policy" className="text-xs font-normal underline underline-offset-1 font-mono text-red-500">privacy policy</a></h2>
        
        {hasAcceptedCookies ? (
        <small style={{}}></small>
      ) : (
        <small style={{color: "red"}}></small>
      )}
      </CookieConsent>
    </div>
      
  );
};

export default CookieConcent;