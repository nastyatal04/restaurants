import React from "react";
import { InfoBox } from "../InfoBox";
import { StarIcon } from "@heroicons/react/24/outline";

export const RestaurantCard = ({
  id,
  name,
  address,
  rating,
  photo,
  phone,
  average_bill,
  working_hours,
}) => {
  return (
    <a
      href={"/" + id}
      className="flex flex-row w-full gap-3 p-3 bg-[#3A3A3A] text-white rounded-lg"
    >
      <img className="w-36 h-36 object-cover rounded" src={photo} alt="" />
      <div className="flex flex-col w-full justify-between">
        <div>
          <div className="flex flex-row justify-between text-xl font-semibold">
            <h1 className="cursor-pointer">{name}</h1>
            <span className="flex items-center">
              <StarIcon className="h-6 w-6 stroke-amber-400" />

              <span className="mt-[2px]">{rating}</span>
            </span>
          </div>
          <div>Адрес: {address}</div>
        </div>
        <div className="flex flex-row justify-between pr-2">
          <InfoBox title="Телефон" info={phone} />
          <InfoBox title="Средний чек" info={average_bill} />
          <InfoBox title="Время работы" info={working_hours} />
        </div>
      </div>
    </a>
  );
};
