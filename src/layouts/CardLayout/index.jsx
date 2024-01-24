import React from "react";
import { Outlet } from "react-router-dom";
export const CardLayout = () => {
  return (
    <div className="flex justify-center h-screen w-screen font-Roboto">
      <div className="w-2/3 flex flex-col items-center">
        <Outlet />
      </div>
    </div>
  );
};
