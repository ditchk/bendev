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
        declineButtonStyle={{background: "transparent", color: "red", borderRadius: "10px", padding: "5px 20px", outline: "0.5px", outlineStyle: "dashed", outlineColor: "red"}} 
        style={{background: "linear-gradient(to top left,#01090a, #02272c, #091f2b )",  width: "90%", opacity: "0.98", margin: "10px", fontFamily: "sans-serif", fontWeight: "lighter", fillOpacity: "0.5", left: "0", borderRadius: "10px", fontSize: "12px", justifyContent: "start", justifySelf: "end", animation: "ease-in-out"}}
        buttonStyle={{background: "transparent", color: "lime", borderRadius: "10px", padding: "5px 20px", outline: "0.5px", outlineStyle: "dashed", outlineColor: "lime"}}
      >
        <h2 className="text-xs text-lime-400">This site uses cookies to improve your experience. Learn more in our{" "}<a href="/privacy-policy" className="text-xs text-light font-mono text-white">privacy policy</a></h2>
        
        {hasAcceptedCookies ? (
        <small style={{}}></small>
      ) : (
        <small style={{color: "red"}}></small>
      )}
      </CookieConsent>
  );
};

export default CookieConcent;