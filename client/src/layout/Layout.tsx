import React from "react";
import Header from "../components/Header.tsx";
import Sidebar from "../components/Sidebar.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-root">
      <Header />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-main">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
