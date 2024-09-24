import React from "react";
const OpenEyeIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
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
        d="M6.3 15.6A17.9 17.9 0 0 1 3.2 12c.5-.8 1.6-2.3 3.1-3.6A8.9 8.9 0 0 1 12 6c2.2 0 4.1 1 5.7 2.4 1.5 1.3 2.6 2.8 3.1 3.6-.5.8-1.6 2.3-3.1 3.6A8.9 8.9 0 0 1 12 18c-2.2 0-4.1-1-5.7-2.4ZM12 4C9.1 4 6.8 5.4 5 7 3.2 8.3 2 10 1.5 11c-.4.6-.4 1.4 0 2 .5.9 1.7 2.6 3.5 4 1.8 1.6 4.1 3 7 3 2.9 0 5.2-1.4 7-3 1.8-1.4 3-3.1 3.5-4 .4-.6.4-1.4 0-2-.5-.9-1.7-2.6-3.5-4-1.8-1.6-4.1-3-7-3Zm-2 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fill={fill}
      />
    </svg>
  );
};
export default OpenEyeIcon;
