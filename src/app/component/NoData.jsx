import React from "react";

const NoData = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center h-52 items flex-1
        "
      >
        <p className="text-6xl font-bold text-red-500 capitalize">
          No data found
        </p>
      </div>
    </div>
  );
};

export default NoData;
