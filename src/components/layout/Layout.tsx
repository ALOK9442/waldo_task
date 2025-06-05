import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./TopBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setSidebarOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-[100dvh] w-full">
      <div className="hidden md:flex flex-col w-64 bg-white">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-white/30 z-40"
            onClick={() => setSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 shadow-lg transform transition-transform duration-300">
            <Sidebar />
          </div>
        </>
      )}

      <div className="flex-1 flex flex-col bg-[#f5f7fa] max-h-[100dvh] overflow-hidden">
        <Topbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />
        <main
          className="md:p-8 p-6 flex-1 overflow-y-auto overflow-x-hidden"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
