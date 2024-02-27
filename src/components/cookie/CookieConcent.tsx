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
        onDecline={Declined}
        acceptOnScroll
        acceptOnScrollPercentage={20}
        style={{background: "teal", width: "90%", margin: "15px", fontFamily: "sans-serif", fontWeight: "lighter", left: "0", borderRadius: "20px" ,fontSize: "14px", justifyContent: "start", outline: "4px" , outlineColor: "white" , justifySelf: "end", animation: "ease-in-out"}}
        buttonStyle={{background: "black", color: "white", borderRadius: "10px", padding: "5px 20px"}}
      >
        This site uses cookies to improve your experience. Learn more in our{" "}
        <a href="/privacy-policy" style={{color: "black", fontFamily: "monospace" , fontWeight: "bolder"}}>privacy policy</a>
        {hasAcceptedCookies ? (
        <small style={{}}></small>
      ) : (
        <small style={{color: "red"}}></small>
      )}
      </CookieConsent>
  );
};

export default CookieConcent;