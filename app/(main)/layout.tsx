import Navbar from "@/components/navigation/navbar";
import Sidebar from "@/components/navigation/sidebar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="hidden md:flex">
        <Sidebar />
      </div>
      <main className=" pl-10 md:pl-80 pr-10 pt-28 pb-2">{children}</main>
    </div>
  );
};

export default Layout;
