import React, { useEffect, useState } from "react";
import { restaurant_data } from "../api/RestaurantData";
import { RestaurantList } from "../components/RestaurantList";
import { useSearchParams } from "react-router-dom";

export const RestaurantsPage = () => {
  const [searchPar, setSearchPar] = useSearchParams();
  const [filterRest, setFilterRest] = useState(restaurant_data);

  //const [searchText, setSearchText] = useState("");

  const searchChange = (event) => {
    const newSearchText = event.target.value;

    const params = new URLSearchParams();
    params.set("search", newSearchText);
    setSearchPar(params);

    //setSearchText(newSearchText);
  };

  useEffect(() => {
    const searchText = searchPar.get("search");
    const results = restaurant_data.filter(
      (rest) =>
        rest.name.toLowerCase().includes(searchText.toLowerCase()) ||
        rest.address.toLowerCase().includes(searchText.toLowerCase()) ||
        rest.description.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRest(results);
  }, [searchPar]);

  return (
    <div className="w-2/3 flex flex-col items-center">
      <h1 className="font-bold p-2 text-2xl">Рестораны Твери</h1>
      <input
        className="w-full border-solid border border-black rounded p-1"
        placeholder="Найти..."
        value={searchPar.get("search")}
        onChange={searchChange}
      />
      <RestaurantList restaurantData={filterRest} />
    </div>
  );
};
