import React from "react";
import IconWrapper from "./IconWrapper";
import Tooltip from "./Tooltip";
const IconButton = ({ onClick, icon, color, size, tooltip }) => {
  return (
    <span onClick={onClick}>
      <Tooltip tooltip={tooltip}>
        <IconWrapper Icon={icon} color={color} size={size} />
      </Tooltip>
    </span>
  );
};
export default IconButton;
