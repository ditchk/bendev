import React, { useState } from "react";
import CookieConsent from "react-cookie-consent";

const CookieConcent: React.FC = () => {
  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    setHasAcceptedCookies(true);
  };

  return (
      <CookieConsent
        location="bottom"
        buttonText="I accept"
        declineButtonText="I decline"
        onAccept={handleAcceptCookies}
        acceptOnScroll
        acceptOnScrollPercentage={20}
        style={{background: "teal", width: "100%", fontSize: "13px", justifyContent: "start", animation: "ease-in-out", boxShadow: "1px 1px 1px teal"}}
        buttonStyle={{background: "black", color: "white", borderRadius: "10px"}}
      >
        This site uses cookies to improve your experience. Learn more in our{" "}
        <a href="/privacy-policy" style={{color: "black"}}>privacy policy</a>.
        {hasAcceptedCookies ? (
        <p style={{color: "red"}}>Cookies have been accepted.</p>
      ) : (
        <p>Cookies have not been accepted.</p>
      )}
      </CookieConsent>
  );
};

export default CookieConcent;