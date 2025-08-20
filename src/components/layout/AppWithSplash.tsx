"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import SplashScreen from "@/components/ui/SplashScreen";

const AppContainer = styled(Box)({
  width: "100%",
  minHeight: "100vh",
});

interface AppWithSplashProps {
  children: React.ReactNode;
  splashDuration?: number;
  enableSplash?: boolean;
}

const AppWithSplash: React.FC<AppWithSplashProps> = ({
  children,
  splashDuration = 4000, // 2 seconds default
  enableSplash = true,
}) => {
  const [showSplash, setShowSplash] = useState(enableSplash);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!enableSplash) {
      setIsLoading(false);
      return;
    }

    // Show splash screen for the specified duration
    const timer = setTimeout(() => {
      setShowSplash(false);
      // Small delay to allow splash screen exit animation
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }, splashDuration);

    return () => clearTimeout(timer);
  }, [splashDuration, enableSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // If splash is disabled, show content immediately
  if (!enableSplash) {
    return <AppContainer>{children}</AppContainer>;
  }

  return (
    <AppContainer>
      {/* Show splash screen during loading */}
      {showSplash && (
        <SplashScreen
          onComplete={handleSplashComplete}
          duration={splashDuration}
          showBrandText={true}
          showLoadingDots={true}
        />
      )}

      {/* Show main content after splash */}
      {!isLoading && children}
    </AppContainer>
  );
};

export default AppWithSplash;
