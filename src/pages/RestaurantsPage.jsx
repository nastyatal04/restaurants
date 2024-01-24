import React, { useEffect, useState } from "react";
import { restaurant_data } from "../api/RestaurantData";
import { RestaurantList } from "../components/RestaurantList";

export const RestaurantsPage = () => {
  const [value, setValue] = useState("");
  const changeValue = (event) => {
    setValue(event.target.value);
    filterList();
  };

  const restaurants = restaurant_data;
  const [filterResult, setFilterResult] = useState(restaurants);
  const filterList = () => {
    restaurants.filter((rest) =>
      setFilterResult(
        rest.name.indexOf(value) >= 0 || rest.address.indexOf(value) >= 0
      )
    );
  };
  useEffect(() => {}, [filterList]);
  return (
    <div className="w-2/3 flex flex-col items-center">
      <h1 className="font-bold p-2 text-2xl">Рестораны Твери</h1>
      <input
        className="w-full border-solid border border-black rounded p-1"
        placeholder="Найти..."
        value={value}
        onChange={changeValue}
      />
      {filterList.length === 0 ? (
        <RestaurantList restaurantData={restaurants} />
      ) : (
        <RestaurantList restaurantData={filterList} />
      )}
    </div>
  );
};
