import React from "react";
const CallIcon = ({ height = 1, width = 1, fill = "#0F0F0F" }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      height={`${height}rem`}
      width={`${width}rem`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      <path
        d="M22 18.3c0 .4-.1.8-.3 1.1-.1.4-.4.7-.7 1-.4.6-1 1-1.6 1.2a5 5 0 0 1-2 .4c-1 0-2-.2-3.2-.7a28.8 28.8 0 0 1-9.5-8c-.8-1.2-1.5-2.4-2-3.5A8.4 8.4 0 0 1 2 6.5c0-.6.1-1.3.4-1.9C2.6 4 3 3.4 3.5 3a3 3 0 0 1 2-.9c.4 0 .7 0 .9.2l.7.5L9.4 6l.4.7.1.6c0 .3 0 .5-.2.7l-.5.7-.8.8-.2.4v.3l.2.2.9 1.2a34.2 34.2 0 0 0 3 3l1.3 1h.2l.2.1.4-.1.8-.8.7-.6.7-.2c.2 0 .4 0 .6.2.3 0 .5.2.8.4l3.3 2.3.5.7.2.7Z"
        stroke={fill}
        stroke-width="2"
        stroke-miterlimit="10"
      />
    </svg>
  );
};
export default CallIcon;
