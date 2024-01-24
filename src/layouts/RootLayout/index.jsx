import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { restaurant_data } from "../../api/RestaurantData";
import { RestaurantCard } from "../../components/RestaurantCard";

export const RootLayout = () => {
  return (
    <div className="flex justify-center h-screen w-screen font-Roboto">
      <Outlet />
    </div>
  );
};
