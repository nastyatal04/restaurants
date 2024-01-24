import React from "react";
import clsx from "clsx";
import { useParams } from "react-router-dom";
import { restaurant_data } from "../../api/RestaurantData";
import { BackButton } from "../BackButton";
import { InfoBox } from "../InfoBox";

export const DetailRestaurantCard = () => {
  const { id } = useParams();
  const result = restaurant_data.filter((rest) => rest.id === id);
  const restaurant = result[0];
  return (
    <div className="font-light w-full select-none py-2 flex flex-col gap-8">
      <BackButton url="/" />
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col gap-1">
          <div className="text-xl">{restaurant.address}</div>
          <h1 className=" text-5xl">{restaurant.name}</h1>
        </div>
        <div className="flex gap-2 text-xl">
          <span>Оценка:</span>
          <span>{restaurant.rating}</span>
          <span className="text-[#808080] text-center text-[13px]">
            {restaurant.number_reviews}
          </span>
        </div>
        <img className="w-full rounded" src={restaurant.photo} alt="" />
        <div className="text-2xl text-justify font-normal">
          {restaurant.description}
        </div>
        <div className="flex flex-row justify-between pr-2">
          <InfoBox
            title="Телефон"
            info={restaurant.phone}
            className="text-xl font-normal"
          />
          <InfoBox
            title="Средний чек"
            info={restaurant.average_bill}
            className="text-xl font-normal"
          />
          <InfoBox
            title="Время работы"
            info={restaurant.working_hours}
            className="text-xl font-normal"
          />
        </div>
      </div>
    </div>
  );
};
