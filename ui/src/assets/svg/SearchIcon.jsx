import React from "react";
const SearchIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 15.6a9 9 0 1 0-1.4 1.4l5.7 5.7a1 1 0 0 0 1.4-1.4L17 15.6ZM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
        fill={fill}
      />
    </svg>
  );
};
export default SearchIcon;
