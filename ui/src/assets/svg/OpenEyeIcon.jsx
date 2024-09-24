import React from "react";
const OpenEyeIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path d="M12 5a10 10 0 0 0-9.5 7 10 10 0 0 0 19 0c-1.2-4-5-7-9.5-7Z" />
      </g>
    </svg>
  );
};
export default OpenEyeIcon;
