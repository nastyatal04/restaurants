import React from "react";
import { restaurant_data } from "../../api/RestaurantData";
import { RestaurantCard } from "../RestaurantCard";

export const RestaurantList = ({ restaurantData }) => {
  return (
    <div className="flex w-full flex-col gap-3 py-3">
      {restaurantData.map((data) => (
        <RestaurantCard
          key={data.id}
          id={data.id}
          name={data.name}
          address={data.address}
          photo={data.photo}
          rating={data.rating}
          phone={data.phone}
          average_bill={data.average_bill}
          working_hours={data.working_hours}
        />
      ))}
      {restaurantData.map((data) => (
        <RestaurantCard
          key={data.id}
          id={data.id}
          name={data.name}
          address={data.address}
          photo={data.photo}
          rating={data.rating}
          phone={data.phone}
          average_bill={data.average_bill}
          working_hours={data.working_hours}
        />
      ))}
    </div>
  );
};
