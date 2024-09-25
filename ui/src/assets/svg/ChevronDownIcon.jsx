import React from "react";
const ChevronDownIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default ChevronDownIcon;
