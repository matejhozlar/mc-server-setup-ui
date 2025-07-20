import React from "react";
import Header from "../components/Header.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <main style={{ flex: 1, overflowY: "auto" }}>{children}</main>
    </div>
  );
};

export default Layout;
