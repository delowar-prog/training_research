"use client";

import { useState } from "react";
import TopBar from "./Topbar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  return (
    <>
      <TopBar setIsVisible={setIsTopbarVisible} />
      <Navbar isTopbarVisible={isTopbarVisible} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}