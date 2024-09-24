import React from "react";
const LoadingIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      className="animate-loading"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M12 3v3m-9 6h3m-.4-6.4 2.2 2.2M5.6 18.4l2.2-2.2M21 12h-3m.4-6.4-2.2 2.2M12 21v-3m6.4.4-2.2-2.2"
        stroke={fill}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export default LoadingIcon;
