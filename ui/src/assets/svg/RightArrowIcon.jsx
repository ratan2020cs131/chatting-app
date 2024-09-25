import React from "react";
const RightArrowIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
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
        d="M12.3 4.3a1 1 0 0 1 1.4 0l7 7c.4.4.4 1 0 1.4l-7 7a1 1 0 0 1-1.4-1.4l5.3-5.3H4a1 1 0 1 1 0-2h13.6l-5.3-5.3a1 1 0 0 1 0-1.4Z"
        fill={fill}
      />
    </svg>
  );
};
export default RightArrowIcon;
