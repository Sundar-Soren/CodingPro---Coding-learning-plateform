"use client";
import React from "react";
import SidebarItem from "./sidebar-item";
import { Layout, List, Settings } from "lucide-react";
import Logo from "./logo";

const Sidebar = () => {
  const route = [
    {
      icon: List,
      label: "Courses",
      href: "/",
    },
    {
      icon: Layout,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
    },
  ];

  return (
    <div className="fixed top-0 left-0 pt-8 md:pt-24 w-72 bg-[#F5F7F9] h-screen">
      <div className="block md:hidden ml-5 mb-5">
        <Logo />
      </div>
      {route.map((routeItem, i) => (
        <SidebarItem
          key={i}
          href={routeItem.href}
          icon={routeItem.icon}
          label={routeItem.label}
        />
      ))}
    </div>
  );
};

export default Sidebar;
