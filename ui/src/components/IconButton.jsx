import React from "react";
import IconWrapper from "./IconWrapper";
import Tooltip from "./Tooltip";
const IconButton = ({ onClick, icon, color, size, tooltip }) => {
  return (
    <Tooltip tooltip={tooltip}>
      <span onClick={onClick} className="cursor-pointer">
        <IconWrapper Icon={icon} color={color} size={size} />
      </span>
    </Tooltip>
  );
};
export default IconButton;
