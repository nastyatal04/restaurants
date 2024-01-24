import clsx from "clsx";
import React from "react";

export const InfoBox = ({ title, info, className }) => {
  return (
    <div className={clsx("flex flex-col", className === "" ? "" : className)}>
      <span className="font-semibold">{title}</span>
      <span>{info}</span>
    </div>
  );
};
