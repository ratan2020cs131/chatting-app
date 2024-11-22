import React from "react";
const DobleChevronUpIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.7 14.7a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L7 9.4l-5.3 5.3zm0-7A1 1 0 0 1 .3 6.3l6-6a1 1 0 0 1 1.4 0l6 6a1 1 0 0 1-1.4 1.4L7 2.4 1.7 7.7z"
        fill={fill}
      />
    </svg>
  );
};
export default DobleChevronUpIcon;
