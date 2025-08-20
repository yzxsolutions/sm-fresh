"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Box, Stack, Slide, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import BottomNavItem from "./BottomNavItem";
import HomeIcon from "../icons/HomeIcon";
import SearchIcon from "../icons/SearchIcon";
import SearchAccentIcon from "../icons/SearchAccentIcon";
import AboutIcon from "../icons/AboutIcon";
import UserIcon from "../icons/UserIcon";
import UserAccentIcon from "../icons/UserAccentIcon";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const NavigationContainer = styled(Paper)({
  position: "relative",
  backgroundColor: "#f5f6f7",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  zIndex: 1000,
  
  // Mobile: Bottom navigation (horizontal)
  "@media (max-width: 767px)": {
    width: "100%",
    maxWidth: "100%",
    borderRadius: "24px 24px 0 0",
    padding: "16px 0 20px 0",
  },
  
  // Tablet: Right side vertical navigation
  "@media (min-width: 768px) and (max-width: 1023px)": {
    borderRadius: "24px",
    padding: "20px 12px",
    width: "auto",
    height: "auto",
  },
  
  // Medium and Large screens: Right side vertical navigation
  "@media (min-width: 1024px)": {
    borderRadius: "24px",
    padding: "24px 16px",
    width: "auto",
    height: "auto",
  },
});

const MenuList = styled(Stack)({
  justifyContent: "space-around",
  alignItems: "center",
  
  // Mobile: Horizontal layout
  "@media (max-width: 767px)": {
    flexDirection: "row",
    width: "100%",
    paddingTop: "8px",
  },
  
  // Tablet and above: Vertical layout
  "@media (min-width: 768px)": {
    flexDirection: "column",
    gap: "20px",
    paddingTop: "0",
  },
  
  // Medium and Large screens: More spacing
  "@media (min-width: 1024px)": {
    gap: "24px",
  },
});

const IndicatorLine = styled(Box)({
  position: "absolute",
  backgroundColor: "#b9c0c9",
  borderRadius: "100px",
  
  // Mobile: Horizontal indicator at bottom
  "@media (max-width: 767px)": {
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "135px",
    height: "5px",
  },
  
  // Tablet and above: Vertical indicator on right side
  "@media (min-width: 768px)": {
    right: "8px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "5px",
    height: "80px",
  },
  
  // Medium and Large screens: Slightly larger indicator
  "@media (min-width: 1024px)": {
    right: "10px",
    height: "100px",
  },
});

// Combined Search Icon Component
const SearchIconCombined: React.FC<{
  width?: number;
  height?: number;
  color?: string;
}> = ({ width = 24, height = 24 }) => (
  <Box sx={{ position: "relative", width, height }}>
    <SearchIcon width={20} height={20} color="inherit" />
    <Box sx={{ position: "absolute", bottom: 2, right: 2 }}>
      <SearchAccentIcon width={5} height={5} color="inherit" />
    </Box>
  </Box>
);

// Combined User Icon Component
const UserIconCombined: React.FC<{
  width?: number;
  height?: number;
  color?: string;
}> = ({ width = 24, height = 24 }) => (
  <Box sx={{ position: "relative", width, height }}>
    <UserIcon width={12} height={12} color="inherit" />
    <Box sx={{ position: "absolute", bottom: 0, left: -2 }}>
      <UserAccentIcon width={19} height={8} color="inherit" />
    </Box>
  </Box>
);

const BottomNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("Home");
  const showNavigation = useScrollTrigger({ threshold: 50 });

  const navigationItems = [
    {
      id: "Home",
      label: "Home",
      href: "/",
      icon: <HomeIcon width={24} height={24} color="inherit" />,
    },
    {
      id: "Category",
      label: "Category",
      href: "/products",
      icon: <SearchIconCombined width={24} height={24} />,
    },
    {
      id: "About",
      label: "About",
      href: "/about",
      icon: <AboutIcon width={24} height={24} color="inherit" />,
    },
    {
      id: "Contact",
      label: "Contact",
      href: "/contact",
      icon: <UserIcon width={24} height={24} />,
    },
  ];

  // Update active tab based on current pathname
  useEffect(() => {
    const currentItem = navigationItems.find((item) => {
      if (item.href === "/") {
        return pathname === "/";
      }
      return pathname.startsWith(item.href);
    });

    if (currentItem) {
      setActiveTab(currentItem.id);
    }
  }, [pathname]);

  const handleTabClick = (tabId: string, href: string) => {
    setActiveTab(tabId);
    router.push(href);
  };

  return (
    <Slide direction="up" in={showNavigation} mountOnEnter unmountOnExit>
      <NavigationContainer elevation={0}>
        <MenuList>
          {navigationItems.map((item) => (
            <BottomNavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              isActive={activeTab === item.id}
              onClick={() => handleTabClick(item.id, item.href)}
            />
          ))}
        </MenuList>
        <IndicatorLine />
      </NavigationContainer>
    </Slide>
  );
};

export default BottomNavigation;