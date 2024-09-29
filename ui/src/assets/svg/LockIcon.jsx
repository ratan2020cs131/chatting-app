import React from "react";
const LockIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <g stroke={fill} stroke-width="2">
        <path d="M2 16c0-2.8 0-4.2.9-5.1.9-.9 2.3-.9 5.1-.9h8c2.8 0 4.2 0 5.1.9.9.9.9 2.3.9 5.1s0 4.2-.9 5.1c-.9.9-2.3.9-5.1.9H8c-2.8 0-4.2 0-5.1-.9C2 20.2 2 18.8 2 16Z" />
        <path d="M12 14v4M6 10V8a6 6 0 1 1 12 0v2" stroke-linecap="round" />
      </g>
    </svg>
  );
};
export default LockIcon;
