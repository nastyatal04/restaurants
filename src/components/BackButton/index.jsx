import React from "react";
import clsx from "clsx";

export const BackButton = ({ url }) => {
  return (
    <a
      href={url}
      className={clsx(
        "flex flex-row justify-between",
        "w-full p-3 rounded",
        "bg-[#3A3A3A]  text-white",
        "cursor-pointer"
      )}
    >
      <span className="material-symbols-rounded leading-8">arrow_back</span>
      <span className="text-2xl font-bold">Назад</span>
    </a>
  );
};
