"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { sidebarButtons } from "./Sidebar";

const RouteName = () => {
  const pathname = usePathname();
  const route = sidebarButtons.find((button) => button.href === pathname);
  const routeName = pathname === "/" ? "Dashboard" : route ? route.text : "Error - 404";

  return (
    <div className="sticky top-0 bg-beeblack justify-start items-start w-full mb-4 p-2 border-b-2 z-50">
      <h1 className="text-[32px] font-bold">{routeName}</h1>
    </div>
  );
};

export default RouteName;
