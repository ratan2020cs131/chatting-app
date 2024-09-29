import React from "react";
const UserIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM20.6 22c0-3.9-3.9-7-8.6-7-4.7 0-8.6 3.1-8.6 7" />
      </g>
    </svg>
  );
};
export default UserIcon;
