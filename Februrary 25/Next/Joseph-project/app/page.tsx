"use client"

import PageOneComp from "@/components/PageOneComp";
import PageTwo from "@/components/PageTwo";
import React, { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    const blinkButton = setInterval(() => {
      const button = document.getElementById("whatsapp-button");
      if (button) {
        button.classList.toggle("animate-wave"); // Apply the wave animation
      }
    }, 1000);

    return () => clearInterval(blinkButton);
  }, []);

  return (
    <div>
      <PageOneComp />
      <PageTwo />
    </div>
  );
};

export default LandingPage;
