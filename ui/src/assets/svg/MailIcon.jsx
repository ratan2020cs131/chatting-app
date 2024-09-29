import React from "react";
const MailIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g stroke={fill} stroke-width="2" stroke-linecap="round">
        <path d="m4 7 6.2 4.7a3 3 0 0 0 3.6 0L20 7" stroke-linejoin="round" />
        <rect x="3" y="5" width="18" height="14" rx="2" />
      </g>
    </svg>
  );
};
export default MailIcon;
