// components/CookieConsentBanner.tsx
"use client"; // Ensures the component is treated as a client component

import React, { useEffect } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { useRouter } from 'next/navigation';

const CookieConsentBanner: React.FC = () => {
  const router = useRouter();

  const handleAccept = () => {
    // Handle cookie acceptance logic here
    console.log('Cookies accepted');
  };

  const handleDecline = () => {
    // Clear cookies on decline
    Cookies.remove('_ga'); // Example of removing Google Analytics cookie
    Cookies.remove('_gid');
    console.log('Cookies declined');
  };

  const handleMoreInfoClick = () => {
    router.push('/PrivacyPolicy');
  };

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept Cookies"
      declineButtonText="Decline"
      enableDeclineButton
      onAccept={handleAccept}
      onDecline={handleDecline}
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      declineButtonStyle={{ color: "#c4c4c4", fontSize: "13px" }}
      expires={150} // Expires in 150 days
    >
      This website uses cookies to enhance user experience. By accepting, you
      agree to our{" "}
      <span
        onClick={handleMoreInfoClick}
        style={{ color: "lightblue", cursor: "pointer" }}
      >
        Privacy Policy
      </span>
      .
    </CookieConsent>
  );
};

export default CookieConsentBanner;
