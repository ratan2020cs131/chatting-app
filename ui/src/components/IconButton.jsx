import React from "react";
import IconWrapper from "./IconWrapper";
import Tooltip from "./Tooltip";

/**
 * IconWrapper Component
 * @param {{
 *   size: 'small' | 'medium' | 'large' | 'xlarge',
 *   icon: Element,
 *   color: string,
 *   tooltip: string,
 *   onClick: Function,
 * }} props
 */
const IconButton = ({ onClick, icon, color, size = "small", tooltip }) => {
  return (
    <Tooltip tooltip={tooltip}>
      <span onClick={onClick} className="cursor-pointer">
        <IconWrapper Icon={icon} color={color} size={size} />
      </span>
    </Tooltip>
  );
};
export default IconButton;
